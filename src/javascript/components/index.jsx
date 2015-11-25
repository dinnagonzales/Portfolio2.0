/**
 * @jsx React.DOM
 */
var React = require('react');
var Header = require('./header');
var Navigation = require('./navigation');
var Footer = require('./common/footer');

var Home = require('./home');
var Projects = require('./projects');
var Photography = require('./photography');
var About = require('./about');

var Index = React.createClass({
  displayName: 'Dinna Gonzales Portfolio',
  getInitialState: function() {
    return {
      page: 'home'
    };
  },
  renderPage: function() {
    switch (this.state.page) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects />
      case 'photography':
        return <Photography />
      case 'about':
        return <About />
    }
  },
  goTo: function(page){
    this.setState({
      page: page
    });
  },
  render: function() {
    return (
      <div className='container'>
        <Header />
        <Navigation goTo={ this.goTo }/>
        { this.renderPage() }
        <Footer />
      </div>
    );
  }
});

module.exports = Index;