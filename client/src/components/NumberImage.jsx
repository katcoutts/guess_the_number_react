var React = require('react');
var classNames = require('classnames');

var NumberImage = React.createClass({

  getInitialState: function(){
    return {selected: false}
  },

  clicked: function(){
    var setSelected = !this.state.selected;
    this.setState({selected: setSelected});
  },

  render: function(){
    var classes = classNames({selected: this.state.selected});
    return (
     <img className={classes} src={this.props.number.src} onClick = {this.clicked} id={this.props.number.id}></img>
  )
}

})

module.exports = NumberImage;