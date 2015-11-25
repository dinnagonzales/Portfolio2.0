/**
 * @jsx React.DOM
 */
 var React = require('react');
 var _= require('lodash');
 var Icon = require('./common/icon');
 var DevProjects = require('./common/projects').development;
 var WebDesignProjects = require('./web-design');
 var DesignProjects = require('./design');
 var Project = require('./project');

 var Projects = React.createClass({
 	displayName: 'Web Projects',
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
 				<h4 className='dev-header'>Design + Development</h4>
 				<hr/>
 				{ developmentProjects }
 			</div>
 		);
 	},
 	render: function() {
 		return (
 			<div className='projects'>
 				{ this.renderDevelopmentProjects() }
 				<WebDesignProjects />
 				<DesignProjects />
 			</div>
 			);
 	}
 });

 module.exports = Projects;