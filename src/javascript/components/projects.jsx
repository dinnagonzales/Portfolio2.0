/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');
var Copy = require('./common/photos').about;
var Project = require('./project');

var Projects = React.createClass({
  render: function() {
    return (
      <div className='projects'>
        <div className='row'>
            <h6>Web Development</h6>
            <Project />
        </div>

        
        
        <div className='row'>
            <h6>Design Projects</h6>
            <div className='medium-12 columns'>
                <div className='row'>
                    <h5>Website Redesign Concept</h5>
                </div>
                <div className='row'>
                    <h5>Logo Design</h5>
                </div>
                <div className='row'>
                    <h5>Flyers</h5>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
});

module.exports = Projects;