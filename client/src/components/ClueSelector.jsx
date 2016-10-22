var React = require("react");
var ClueAnswerBox = require('./ClueAnswerBox.jsx');

var ClueSelector = React.createClass({

  getInitialState: function(){
    return {
      response: null
    }
  },

  handleChange: function(event){
    var targetQuestion = event.target.value;
    var targetQuestionAnswer = this.props.answerNumber[targetQuestion];
    console.log("Target Question is", targetQuestion)
    console.log("Target Question answer is", targetQuestionAnswer)
    console.log(this.props.answerNumber[targetQuestion])
    console.log("props answer value is", this.props.answerNumber.oddQ)
    this.setState({response: targetQuestionAnswer})
  },


  render: function(){
    return (  
    <div>   
      <select onChange={this.handleChange}>
        <option selected disabled>Choose a clue...</option>
        <option value="primeQ">Is it a prime number?</option>
        <option value="threeQ">Is it divisible by 3?</option>
        <option value="oddQ">Is it an odd number?</option>
        <option value="squareRootQ">Is its square root an integer?</option>
        <option value="letterSQ">Does it start with the letter S?</option>
        <option value="octagonQ">Is it bigger than the number of sides of an octagon?</option>

      </select>
      <ClueAnswerBox response = {this.state.response}/>
    </div>
    )
  }
})

module.exports = ClueSelector