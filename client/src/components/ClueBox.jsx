var React = require('react');
var ClueSelector = require('./ClueSelector.jsx');


var ClueBox = React.createClass({

  getInitialState: function(){
    return { 
      numbers: null,
      answerNumber: null
    }
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      numbers: nextProps.numbers,
      answerNumber: nextProps.answerNumber
    });
  },

  render: function() {
    return (
      <div id="clue-box">
        <h3>Pick a clue</h3>
        <ClueSelector answerNumber = {this.state.answerNumber}/>
      </div>
      )
  }

})

module.exports = ClueBox;