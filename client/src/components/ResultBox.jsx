var React = require('react');
var ResultText = require('./ResultText.jsx');
var GuessBox = require('./GuessBox.jsx');

var ResultBox = React.createClass({

  getInitialState: function(){
    return { 
      answerNumber: null,
      result: null
    }
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      answerNumber: nextProps.answerNumber
    });
    console.log("Result box answerNumber" , nextProps.answerNumber)
  },

  workOutResult: function(guess){
    console.log("work out result has been called")
    var resultText = null;
    if (guess === this.state.answerNumber.id.toString()){
      resultText = "You're Right";
      this.setState({result: resultText})
    }
    else {
      resultText = "You're Wrong";
      this.setState({result: resultText})
      console.log("Result is ", resultText)
    }
  },

  updateForRightAnswer: function(){
    var bitToUpdate = document.querySelector('.guessBit');
    bitToUpdate.style.display = "none";
  },

  render: function() {
    return (
      <div className="result-box">
        <div className="guessBit">
          <h2>Make a guess</h2>
          <GuessBox answerNumber = {this.state.answerNumber} getResult = {this.workOutResult}/>
        </div>
        <ResultText rightAnswer = {this.updateForRightAnswer} answerNumber = {this.state.answerNumber} result = {this.state.result}/>
      </div>
      )
  }

})

module.exports = ResultBox;