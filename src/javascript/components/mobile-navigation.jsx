/**
* @jsx React.DOM
*/
var React = require('react');
var Icon = require('./common/icon');

var MobileNavigation = React.createClass({
	getInitialState: function(){
		return{
			show: false
		};
	},
	toggleMenu: function(){
		this.setState({
			show: !this.state.show
		});
	},
	goTo: function(e){
    	var page = e.target.innerHTML;
    	this.props.goTo(page);
    	this.toggleMenu();
  	},
	render: function() {
		var menuClassName = this.props.menuClass + ' mobile-navigation';
		var menuDisplay = this.state.show ? 'block' : 'none';
		var iconDisplay = this.state.show ? 'none' : 'inline-block';
		var text = this.state.show ? 'X' : 'Menu' ;

		return (
			<div className={ menuClassName }>
				<div className='row'>
					<div className='menu' onClick={ this.toggleMenu }>
						<span>{ text} </span>
						<span style={{ display: iconDisplay }}>
							<Icon type='menu' />
						</span>
					</div>

					<div className='row menu-body' style={{display: menuDisplay }}>
						<div className='small-12 columns' onClick={ this.goTo }>
							<span>home</span>
						</div>
						<div className='small-12 columns' onClick={ this.goTo }>
							<span>gallery</span>
						</div>
						<div className='small-12 columns'>
							<a href='http://storyboxcollection.com/' target='_blank'>
								<span>blog</span>
							</a>
						</div>
						<div className='small-12 columns' onClick={ this.goTo }>
							<span>about</span>
						</div>
						<div className='small-12 columns' onClick={ this.goTo }>
							<span>contact</span>
						</div>

						<a href='https://www.instagram.com/ellienh/' target='_blank'>
							<div className='small-12 columns'>
								<div className='instagram'>
						  			Instagram <Icon type='instagram' />
								</div>
							</div>
						</a>
					</div>
	
				</div>
			</div>
		);
	}
});

module.exports = MobileNavigation;