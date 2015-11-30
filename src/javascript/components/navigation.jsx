/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');

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
      <nav>
        <ul className='page-navigation row show-for-large-up'>
          <li className='large-2 columns' onClick={ this.goTo } id='home'><span>Home</span></li>
          <li className='large-2 columns' onClick={ this.goTo } id='development'><span>Development</span></li>
          <li className='large-3 columns' onClick={ this.goTo } id='design'><span>Design</span></li>
          <li className='large-2 columns' id='resume'>
            <a href='https://www.docdroid.net/vCJgnlj/dinnagonzaleswebdeveloperresume.pdf.html' target='_blank'>
              <span>
                Resume <Icon type='resume' />
              </span>
            </a>

          </li>
          <li className='large-2 columns' onClick={ this.goTo } id='about'><span>About</span></li>
        </ul>

        <ul className='mobile-navigation row hide-for-large-up'>
          <li className='small-3 columns' onClick={ this.goTo } id='development'>
            <Icon type='dev-icon' />
            <p>Development</p>
          </li>
          <li className='small-3 columns' onClick={ this.goTo } id='design'>
            <Icon type='design-icon' />
            <p>Design</p>
          </li>
          <li className='small-3 columns' id='resume'>
             <a href='https://www.docdroid.net/vCJgnlj/dinnagonzaleswebdeveloperresume.pdf.html'>
              <Icon type='resume' />
              <p>Resume</p>
            </a>

          </li>
          <li className='small-3 columns' onClick={ this.goTo } id='about'>
            <Icon type='about' />
            <p>About Me</p>
          </li>
        </ul>



      </nav>
    );
  }
});

module.exports = Navigation;