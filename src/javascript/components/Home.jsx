/**
 * @jsx React.DOM
 */
var React = require('react');

var Home = React.createClass({
  goTo: function(e){
    var page = e.target.innerHTML;
    this.props.goTo(page);
  },
  render: function() {
    return (
      <div className="home">
        <div className="photos">
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-49.jpg" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-86.jpg" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-60.jpg" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-130.jpg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Home;