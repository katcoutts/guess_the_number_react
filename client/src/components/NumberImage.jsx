var React = require('react');

var NumberImage = React.createClass({

  clicked: function(){
    var image = document.getElementById(this.props.number.id);
    image.style.opacity = "0.2";
  },

  render: function(){
    return (
     <img src={this.props.number.src} onClick = {this.clicked} id={this.props.number.id}></img>
  )
}

})

module.exports = NumberImage;