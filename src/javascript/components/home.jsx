/**
* @jsx React.DOM
*/
var React = require('react');
var Icon = require('./common/icon');


var Home = React.createClass({
	displayName: 'Home',
	render: function() {
		return (
		<div className='home'>
			<div className='row'>
				<div className='small-12 columns'>
					Home
				</div>
			</div>
		</div>
		);
	}
});

module.exports = Home;