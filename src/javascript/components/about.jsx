/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');
var Copy = require('./common/photos').about;

var About = React.createClass({
  render: function() {
    return (
      <div className='about row'>
      	<h3>About</h3>
        <div className='medium-6 columns'>
        	<div className='row personal-photos'>
        		<div className='small-6 columns'>
	        		<img src={ Copy.photo }/>
				</div>
        		<div className='small-6 columns'>
	        		<img src={ Copy.photo }/>
				</div>
        	</div>
        </div>

        <div className='medium-6 columns about-text'>
        	<p className='text'>
        		{ Copy.text }
        	</p>

        	<div className='row about-icons'>
        		<div className='small-12 columns mail'>
        			<Icon type='mail'/>
        			<a href='mailto:ehernandez2388@gmail.com'>ehernandez2388@gmail.com</a>
        		</div>
        		<div className='small-12 columns instagram'>
        			<a href='https://www.instagram.com/ellienh/' target='_blank'>
        				<Icon type='instagram' />
                        <span>instagram.com/ellienh</span>
        			</a>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
});

module.exports = About;