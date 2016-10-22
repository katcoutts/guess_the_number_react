var React = require('react');

var GuessBox = React.createClass({

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
  },

  handleGuess: function(){
    var guess = document.getElementById('playerGuess').value;
    console.log("Player guess is, " , guess);
    this.props.getResult(guess);
  },

  render: function() {
    return (
      <div id="guess-box">
        <input id="playerGuess" placeholder="Make a guess"></input>
        <button onClick = {this.handleGuess}>Am I right?!</button>
      </div>
      )
  }

})

module.exports = GuessBox;