/**
 * Created by mingyan on 7/11/15.
 */
var React = require('react');
var styles = require('./styles/main.styl');

var Hello = React.createClass({
  displayName: 'Hello',
  render: function(){
    return (<div>Hi, {this.props.name}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Adam</td>
            <td>Brault</td>
            <td>adam@andyet.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lynn</td>
            <td>Fisher</td>
            <td>lynn@andyet.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Adam</td>
            <td>Baldwin</td>
            <td>baldwin@andyet.com</td>
          </tr>
        </tbody>
      </table>
    </div>)
  }
})

React.render(<Hello name='World!'/>, document.body);
