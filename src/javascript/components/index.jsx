/**
 * @jsx React.DOM
 */
var React = require('react');
var Header = require('./header');
var Footer = require('./common/footer');
var Navigation = require('./navigation');
var Projects = require('./projects');

var Index = React.createClass({
  getInitialState: function() {
    return {
      page: 'projects'
    };
  },
  renderPage: function() {
    switch (this.state.page) {
      case 'home':
        return <Home goTo={ this.goTo }/>
      case 'projects':
        return <Projects />
      case 'blog':
        return <Blog />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
    }
  },
  goTo: function(page){
    console.log(page);
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