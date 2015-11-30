/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./icon');

var Footer = React.createClass({
  render: function() {
    return (
    	<footer>
    		<div className='row'>
    			<div className='large-12 columns links'>
                    <a href="mailto:dinnagonzales.05@gmail.com" target="_top"><Icon type='mail' /></a>
                    <a href='https://www.linkedin.com/in/dinnagonzales' target='_blank'> <Icon type='linkedIn'/></a>
                    <a href='https://github.com/dinnagonzales' target='_blank'> <Icon type='github' /></a>
                    <a href='https://www.instagram.com/dinnagonzales/' target='_blank'><Icon type='instagram'/></a>
        		</div>
                <div className='large-12 columns name'>
                	<span>Dinna Gonzales © 2015  |  Jeremiah 29:11</span>
                </div>  
        	</div>
    	</footer>
    );
  }
});

module.exports = Footer;