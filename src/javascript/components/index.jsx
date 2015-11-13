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
      var homePage = this.state.page === 'home';
      var navClass= homePage ? 'show-for-medium-up home-navigation' : 'show-for-large-up pages-navigation';
      var rowClass= homePage ? 'navigation home-nav' : 'navigation page-nav';
      var menuClass = homePage ? 'menu hide-for-medium-up' : 'menu hide-for-large-up';
      return <Navigation navClass={ navClass } rowClass={ rowClass } menuClass={ menuClass } goTo={ this.goTo }/>;
  },
  renderFooter: function(){
    if(this.state.page !== 'home'){
      return (    
        <div className='small-12 small-centered columns footer'>
          <span>Story Box Collection © 2015</span>
        </div>
      );
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
      <div className="container">
        { this.renderNavigation() }
        { this.renderPage() }
        { this.renderFooter() }
      </div>
    );
  }
});

module.exports = Index;