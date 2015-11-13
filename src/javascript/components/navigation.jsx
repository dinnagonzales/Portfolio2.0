/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');

var Navigation = React.createClass({
  goTo: function(e){
    var page = e.target.innerHTML;
    this.props.goTo(page);
  },
  render: function() {
    var rowClassName = this.props.rowClass + ' row';
    return (
      <div className='navigation-bar'>
        <div className={ this.props.menuClass} >
          <span>Menu</span><Icon type='menu' />
        </div>
        <div className={ this.props.navClass }> 
          <nav className={ rowClassName }>
            <div className='medium-2 large-2 column' onClick={ this.goTo }><span>home</span></div>
            <div className='medium-2 large-2 column' onClick={ this.goTo }><span>gallery</span></div>
            <a href='http://storyboxcollection.com/' target='_blank'>
              <div className='medium-2 large-2 column'>
                <span>blog</span>
              </div>
            </a>
            <div className='medium-2 large-2 column' onClick={ this.goTo }><span>about</span></div>
            <div className='medium-2 large-2 column' onClick={ this.goTo }><span>contact</span></div>
            <div className='medium-2 large-2 column social'>
              <a href='https://www.instagram.com/ellienh/' target='_blank'>
                <div className='instagram'>
                  <Icon type='instagram' />
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;