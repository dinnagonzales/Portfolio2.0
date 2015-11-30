/**
 * @jsx React.DOM
 */
var React = require('react');

var Header = React.createClass({
  displayName: 'Header',
  goTo: function(){
    this.props.goTo('home');
  },
  render: function() {
    return (
      <header className='page-header'>
      	<div className='row'>
      		<div className='small-centered large-5 columns'>
      			<img className='hang' onClick={ this.goTo } src='./assets/logo.png'/>
      		</div>
      	</div>
      </header>
    );
  }
});

module.exports = Header;