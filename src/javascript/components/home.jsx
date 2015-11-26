/**
* @jsx React.DOM
*/
var React = require('react');
var Icon = require('./common/icon');


var Home = React.createClass({
	displayName: 'Home',
	goTo: function(e){
  	  	var page = e.currentTarget.id;
    	this.props.goTo(page);
  	},
	render: function() {
		return (
		<div className='home'>
			<div className='row'>
				<div className='medium-12 large-3 columns'>
					<h5>Hello.</h5>
				</div>
				<div className='medium-12 large-8 columns'>
					<span>My name is Dinna Gonzales.</span>
					<p>I am a front-end web developer based in sunny Los Angeles!</p>
					<p>Feel free to look around!</p>
				</div>
			</div>
			<div className='row info'>
				<div className='medium-6 columns' onClick={ this.goTo } id='development'>
					<Icon type='development'/>
					My Development Work
				</div>
				<div className='medium-6 columns' onClick={ this.goTo } id='design'>
					<Icon type='design'/>
					My Design Work
				</div>


			</div>
		</div>
		);
	}
});

module.exports = Home;