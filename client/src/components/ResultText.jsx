var React = require('react');

var ResultText = function( props ) {

  console.log("props.response of ResultText is", props.result)

  if(!props.result){
    return <h4>  </h4>
  }



  return (
    <h2 id="response-text">{props.result}</h2>
  )


}

module.exports = ResultText;