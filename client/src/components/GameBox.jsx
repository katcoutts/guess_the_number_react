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

  componentDidMount: function() {
    var url = "api/numbers";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      console.log(request.responseText);
      var data = JSON.parse(request.responseText);
      this.setState({ numbers: data });
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
      var chosenNumber = this.state.numbers[Math.floor(Math.random()*this.state.numbers.length)];
      console.log("chosenNumber is ", chosenNumber)
      this.updateAnswerNumber(chosenNumber);
    }
  },



  render: function() {
    return (
      <div>
        <h1>Guess The Number</h1>
        <NumbersList numbers = {this.state.numbers} />
        <ClueBox numbers = {this.state.numbers} answerNumber = {this.state.answerNumber} />
        <ResultBox answerNumber = {this.state.answerNumber} />
      </div>
      )
  }

})

module.exports = GameBox;


