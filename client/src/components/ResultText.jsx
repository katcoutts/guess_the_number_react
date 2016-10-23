var React = require('react');
var ResponseDetail = require('./ResponseDetail.jsx')

var ResultText = function( props ) {

  console.log("props.response of ResultText is", props.result)
  console.log("result text has answer of", props.answerNumber)

  if(!props.result){
    return <h4>  </h4>
  }

  if(props.result === "You're Wrong"){
    return <h2>{props.result}</h2>
  }

  if(props.result === "You're Right"){
    console.log('right answer called')
    props.rightAnswer();
  }

  return (
    <div>
      <h2 className="response-text">{props.result}</h2>
      <ResponseDetail answerNumber={props.answerNumber}/>
        
    </div>
  )


}

module.exports = ResultText;