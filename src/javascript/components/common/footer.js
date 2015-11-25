/**
 * @jsx React.DOM
 */
var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
    	<footer>
    		<div className='row'>
    			<div className='medium-6 columns'>
        			<span>Dinna Gonzales © 2015  |  Jeremiah 29:11</span>
        		</div>
        		<div className='medium-6 columns'>
        			<a href='https://github.com/dinnagonzales' target='_blank'><img src='../../assets/github.png'/></a>
        			<a href='https://www.linkedin.com/in/dinnagonzales' target='_blank'><img src='../../assets/linkedIn.png'/></a>
        			<a href='../assets/resume.pdf" download="DinnaGonzalesResume'><img src='../../assets/resume.png'/></a>
        			<a href='https://www.instagram.com/dinnagonzales/' target='_blank'><img src='../../assets/instagram.png'/></a>
        		</div>
        	</div>
    	</footer>
    );
  }
});

module.exports = Footer;