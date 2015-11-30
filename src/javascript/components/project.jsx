/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');

var Project = React.createClass({
  displayName: 'Development Project',
  viewWebsite: function(){
    if(this.props.title === 'Portfolio 2.0'){
      return(
      <div className='goTo grey'>
          View Website
          <Icon type='arrow'/>
      </div>
      );
    }
    return(
      <div className='goTo'>
        <a target='_blank' href={ this.props.website } >
          View Website
          <Icon type='arrow'/>
        </a>
      </div>
    );  
  },
  render: function() {
    var WIP = this.props.title === 'StoryBoxCollection' ? '* Work In Progress *' : '';
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
            { this.viewWebsite() }
      		</div>

 			<div className='description'>
        <div className='wip'>{ WIP }</div>
 				<p>{ this.props.description }</p>
 			</div>
      <p className='tech'>
        <span>Technologies used:</span>  { this.props.tech }
      </p>
      	</div>

      </div>
    );
  }
});

module.exports = Project;