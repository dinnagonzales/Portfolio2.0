/**
 * @jsx React.DOM
 */
var React = require('react');
var Home = require('./home');
var Gallery = require('./gallery');
var Blog = require('./blog');
var About = require('./about');
var Contact = require('./contact');
var Navigation = require('./navigation');

var Index = React.createClass({
  getInitialState: function() {
    return {
      page: 'home'
    };
  },
  renderNavigation: function(){
      if (this.state.page !== 'home'){
        return <Navigation goTo={ this.goTo }/>;
      }
  },
  renderPage: function() {
    switch (this.state.page) {
      case 'home':
        return <Home goTo={ this.goTo }/>
      case 'gallery':
        return <Gallery />
      case 'blog':
        return <Blog />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
    }
  },
  goTo: function(page){
    this.setState({
      page: page
    });
  },
  render: function() {
    return (
      <div>
        { this.renderNavigation() }
        { this.renderPage() }
      </div>
    );
  }
});

module.exports = Index;