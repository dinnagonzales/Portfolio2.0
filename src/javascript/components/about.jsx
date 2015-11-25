/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');
var Copy = require('./common/photos').about;

var About = React.createClass({
  render: function() {
    return (
      <div className='about'>
        <div className='row'>
            <div className='small-12 columns'>
                About
            </div>
        </div>
      </div>
    );
  }
});

module.exports = About;