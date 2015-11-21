/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');
var Copy = require('./common/photos').about;

var Project = React.createClass({
  render: function() {
    return (
      <div className='project'>
      	<h4>Project</h4>
      </div>
    );
  }
});

module.exports = Project;