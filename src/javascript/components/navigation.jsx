/**
 * @jsx React.DOM
 */
var React = require('react');

var Navigation = React.createClass({
  goTo: function(e){
    var page = e.currentTarget.id;
    this.props.goTo(page);
  },
  render: function() {
    return(
      <nav className='page-navigation'>
        <ul className='row'>
          <li className='medium-2 columns' onClick={ this.goTo } id='about'><span>About</span></li>
          <li className='medium-2 columns' onClick={ this.goTo } id='projects'><span>Projects</span></li>
          <li className='medium-2 columns' onClick={ this.goTo } id='resume'><span>Resume</span></li>
          <li className='medium-3 columns' onClick={ this.goTo } id='photography'><span>Photography</span></li>
          <li className='medium-2 columns' onClick={ this.goTo } id='contact'><span>Contact</span></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;