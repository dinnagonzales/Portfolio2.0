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
			<div className='row top'>
				<div className='medium-12 large-3 columns large-offset-1'>
					<h5>Hello.</h5>
				</div>
				<div className='medium-12 large-7 columns hello'>
					<span>My name is Dinna Gonzales.</span>
					<p>I am a front-end web developer based in Los Angeles.
					Welcome to my personal portfolio!
					My set of skills range from design, to HTML + CSS & Javascript.</p>

					<p className='available'>I am currently available for freelance and full-time work.</p>
					<div className='find row'>
						<div className='medium-6 columns learn' onClick={ this.goTo } id='about'>
							Learn more about me <Icon type='about'/>
						</div>
						<div className='medium-6 columns connect hang'>
							Let's connect!
							<a href="mailto:dinnagonzales.05@gmail.com" target="_top"><Icon type='mail' /></a>
							<a href='https://www.linkedin.com/in/dinnagonzales' target='_blank'><Icon type='linkedIn'/></a>
							<a href='https://github.com/dinnagonzales' target='_blank'><Icon type='github'/></a>
						</div>
					</div>
				</div>
			</div>
			<div className='tech'>
				<img src='./assets/html.png' alt='html5'/>
				<img src='./assets/js.png' alt='javascript'/>
				<img src='./assets/css.png' alt='css'/>
				<img src='./assets/foundation.png' alt='foundation'/>
				<img src='./assets/react.png' alt='react'/>
				<img src='./assets/gulp.png' alt='gulp'/>
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