var React = require('react');
var NumbersList = require('./NumbersList.jsx');
var ClueBox = require('./ClueBox.jsx');
var ResultBox = require('./ResultBox.jsx');

var GameBox = React.createClass({

  getInitialState: function(){
    return { 
      numbers: [], 
      answerNumber: null,
    }
  },

// shuffle function taken from stackoverflow http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle: function(array){
      var rand, index = -1,
        length = array.length,
        result = Array(length);
      while (++index < length) {
        rand = Math.floor(Math.random() * (index + 1));
        result[index] = result[rand];
        result[rand] = array[index];
      }
      this.getGameNumbers(result, 0, 9);
      return result;
  },

  getGameNumbers: function(array, num1, num2){
    console.log("result of shuffle", array)
    var numbersForThisGame = array.slice(num1, num2);
    this.setState({numbers: numbersForThisGame});
    this.selectAnswerNumber(numbersForThisGame);
  },

  selectAnswerNumber: function(array){
    var chosenNumber = array[Math.floor(Math.random()*array.length)];
    this.updateAnswerNumber(chosenNumber);
    console.log("chosenNumber is ", chosenNumber)
  },

  componentDidMount: function() {
    var url = "api/numbers";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      console.log(request.responseText);
      var data = JSON.parse(request.responseText);
      this.setState({ numbers: data});
    }.bind(this);
    request.send();
  },

  updateAnswerNumber: function(givenNumber){
    console.log("updateAnswerNumber has been called");
    this.setState({answerNumber: givenNumber});
  },

  componentDidUpdate: function(){
    console.log("componentDidUpdate has been called")
    if (!this.state.answerNumber){
      this.shuffle(this.state.numbers);
    }
  },

  handleClick: function(){
    window.location.reload()
  },



  render: function() {
    return (
      <div>
        <h1>Guess The Number</h1>
        <NumbersList numbers = {this.state.numbers} />
        <ClueBox numbers = {this.state.numbers} answerNumber = {this.state.answerNumber} />
        <ResultBox answerNumber = {this.state.answerNumber} />
        <button onClick={this.handleClick} className="new-game-button">New Game</button>
      </div>
      )
  }

})

module.exports = GameBox;


