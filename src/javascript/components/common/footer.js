/**
 * @jsx React.DOM
 */
var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
    	<div className='small-12 small-centered columns footer'>
        	<span>Story Box Collection © 2015</span>
    	</div>
    );
  }
});

module.exports = Footer;