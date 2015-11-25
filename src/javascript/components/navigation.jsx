/**
 * @jsx React.DOM
 */
var React = require('react');

var Navigation = React.createClass({
  displayName: 'Navigation',
  goTo: function(e){
    var page = e.currentTarget.id;
    this.props.goTo(page);
  },
  getInitialState: function () {
    return {downloadLink: false};
  },
  toggleDownload: function () {
    this.setState({downloadLink: !this.state.downloadLink});
  },

  render: function() {
    return(
      <nav className='page-navigation'>
        <ul className='row'>
          <li className='large-2 columns' onClick={ this.goTo } id='home'><span>Home</span></li>
          <li className='large-2 columns' onClick={ this.goTo } id='projects'><span>Projects</span></li>
          <li className='large-3 columns' onClick={ this.goTo } id='photography'><span>Photography</span></li>
          <li className='large-2 columns' id='resume'>
            <a href="../assets/resume.pdf" download="DinnaGonzalesResume">
              <span>
                Resume <img className='resume' src='../assets/resume_black.png'/>
              </span>
            </a>

          </li>
          <li className='large-2 columns' onClick={ this.goTo } id='about'><span>About</span></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;