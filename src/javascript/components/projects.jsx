/**
 * @jsx React.DOM
 */
 var React = require('react');
 var _= require('lodash');
 var Icon = require('./common/icon');
 var DevProjects = require('./common/projects').development;
 var DesignProjects = require('./design');
 var Project = require('./project');

 var Projects = React.createClass({
 	renderDevelopmentProjects: function(){
 		var developmentProjects = _.map(DevProjects, function(proj, i){
 			return <Project 
 				key={ i }
 				title={ proj.title }
 				description={ proj.description }
 				tech={ proj.tech }
 				image={ proj.image } 
 				github={ proj.github }
 				website={ proj.website } />
 		});
 		return( 
 			<div className='development-projects row'>
 				{ developmentProjects }
 			</div>
 		);
 	},
 	render: function() {
 		return (
 			<div className='projects'>
 				<h4 className='dev-header'>Web Development Projects</h4>
 				{ this.renderDevelopmentProjects() }
 				<h4 className='design-header'>Design Projects</h4>
 				<DesignProjects />
 			</div>
 			);
 	}
 });

 module.exports = Projects;