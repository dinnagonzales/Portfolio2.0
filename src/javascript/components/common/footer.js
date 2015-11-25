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
        			<img src='../../assets/github.png'/>
        			<img src='../../assets/linkedIn.png'/>
        			<img src='../../assets/resume.png'/>
        			<img src='../../assets/instagram.png'/>
        		</div>
        	</div>
    	</footer>
    );
  }
});

module.exports = Footer;