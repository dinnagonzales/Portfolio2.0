/**
 * @jsx React.DOM
 */
var React = require('react');

var Home = React.createClass({

  render: function() {
    return (
      <div className="home">
      HOME
        <div className="photos">
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-49.jpg" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-86.jpg" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-60.jpg" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-130.jpg" alt="" />
        </div>
        
        <nav className='row home-nav'>
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

module.exports = Home;