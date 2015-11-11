/**
 * @jsx React.DOM
 */
var React = require('react');

var Navigation = React.createClass({

  render: function() {
    return (
      
      <div className='navigation'>
        <nav className='row'>
          <div onClick={ this.props.goTo.bind(this, 'home') }>home</div>
          <div onClick={ this.props.goTo.bind(this,'gallery')}>gallery</div>
          <div onClick={ this.props.goTo.bind(this,'blog')}>blog</div>
          <div onClick={ this.props.goTo.bind(this,'about')}>about</div>
          <div onClick={ this.props.goTo.bind(this,'contact')}>contact</div>
        </nav>
      </div>
    );
  }
});

module.exports = Navigation;