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

  render: function() {
    return (
      <div id="clue-box">
        <h3>Make a guess</h3>
        <GuessBox answerNumber = {this.state.answerNumber} getResult = {this.workOutResult}/>
        <ResultText result = {this.state.result}/>
      </div>
      )
  }

})

module.exports = ResultBox;