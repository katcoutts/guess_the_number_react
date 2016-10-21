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
      <select id="clue-selector" onChange={this.handleChange}>
        <option selected disabled>Choose a clue...</option>
        <option id="primeQues" value="primeQ">Is it a prime number?</option>
        <option id="threeQues" value="threeQ">Is it divisible by 3?</option>
        <option id="oddQues" value="oddQ">Is it an odd number?</option>
        <option id="squareRootQues" value="squareRootQ">Is its square root an integer?</option>
      </select>
      <ClueAnswerBox response = {this.state.response}/>
    </div>
    )
  }
})

module.exports = ClueSelector