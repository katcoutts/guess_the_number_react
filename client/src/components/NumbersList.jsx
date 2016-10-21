var React = require('react');
var NumberImage = require('./NumberImage.jsx');

var NumbersList = function( props ) {
  
  var numberNodes = props.numbers.map(function(number, index) {
    console.log("number ", number)
    return (
      <li key={index}>
        <NumberImage number={number}/>
      </li>
    )
  })

  return(
    <div className='number-list'>
      <ul className='custom-counter'>
        {numberNodes}
      </ul>
    </div>
  )

}

module.exports = NumbersList;