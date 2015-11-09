/**
 * Created by mingyan on 7/11/15.
 */
var React = require('react');
var styles = require('./styles/main.styl');

var Hello = React.createClass({
  displayName: 'Hello',
  render: function(){
    return <div>Hi, {this.props.name}</div>
  }
})

React.render(<Hello name='World!'/>, document.body);
