var React = require('react');

var ResponseDetail = function(props){

  if(!props.answerNumber){
    return <p> " "</p>
  }

  return(
    <div>
      <h4>Is {props.answerNumber.id} a prime number?: {props.answerNumber.primeQ}</h4>
      <h4>Is {props.answerNumber.id} an odd number?: {props.answerNumber.oddQ}</h4>
      <h4>Is {props.answerNumber.id} divisible by 3?: {props.answerNumber.threeQ}</h4>
      <h4>Is the square root of {props.answerNumber.id} an integer?: {props.answerNumber.squareRootQ}</h4>
      <h4>Does {props.answerNumber.id} start with the letter S?: {props.answerNumber.letterSQ}</h4>
      <h4>Is {props.answerNumber.id} bigger than the number of sides in an octagon?: {props.answerNumber.octagonQ}</h4>
    </div>
  )

}

module.exports = ResponseDetail