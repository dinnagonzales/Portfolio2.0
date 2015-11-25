/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');
var Copy = require('./common/photos').about;

var Project = React.createClass({
  render: function() {
    return (
      <div className='small-12 medium-6 large-4 columns'>
      	
      	<div className='project'>
      	
      		<p className='project-title'>
      			{ this.props.title }
      		</p>
      		
      		<img src={ this.props.image }/>
      		
      		<div className='links'>
      			<div className='goTo'>
	      			<a target='_blank' href={ this.props.github } >
	      				<span>Source Code</span>
	      				<Icon type='github'/>
	      			</a>
	      		</div>
	      		<div className='goTo'>
	      			<a target='_blank' href={ this.props.website } >
	      				View Website
	      				<Icon type='arrow'/>
	      			</a>
	      		</div>
      		</div>

 			<p className='description'>
 				{ this.props.description }
 			</p>

      	</div>

      </div>
    );
  }
});

module.exports = Project;