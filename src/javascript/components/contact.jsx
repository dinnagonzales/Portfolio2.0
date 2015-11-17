/**
 * @jsx React.DOM
 */
var React = require('react');
var Iframe = require('react-iframe');

var Contact = React.createClass({
  render: function() {
    return (
      <div className='row contact'>
      	<div className='small-12 columns header'>
      	contact
  		</div>

  		
      	<div className='small-12 columns iframe'>
      		<Iframe url='https://dinnagonzales.wufoo.com/forms/contact&amp;header=hide'/>
      	</div>
      </div>
    );
  }
})

module.exports = Contact;