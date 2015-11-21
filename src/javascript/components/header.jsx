/**
 * @jsx React.DOM
 */
var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
      	<div className='row'>
      		<div className='small-centered large-5 columns'>
      			<img src='./assets/logo.png'/>
      		</div>
      	</div>
      </header>
    );
  }
});

module.exports = Header;