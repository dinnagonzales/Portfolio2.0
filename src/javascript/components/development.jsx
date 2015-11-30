/**
 * @jsx React.DOM
 */
 var React = require('react');
 var _= require('lodash');
 var Icon = require('./common/icon');
 var DevProjects = require('./common/projects').development;
 var Project = require('./project');

 var Development = React.createClass({
 	displayName: 'Web Development',
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
 				<p>Featured here are some of the projects that I coded and designed while I was a student at General Assembly and some while I was freelancing.</p>
 				{ this.renderDevelopmentProjects() }
 			</div>
 			);
 	}
 });

 module.exports = Development;