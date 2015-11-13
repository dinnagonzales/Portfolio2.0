/**
 * @jsx React.DOM
 */
var React = require('react');
var photo = require('./common/photos').gallery;
var MainGallery = require('./main-gallery');
var Album = require('./album');

var Gallery = React.createClass({
	getInitialState: function(){
		return{
			gallery: 'main'
		}
	},
	goTo: function(gallery){
		this.setState({
			gallery: gallery
		});
	},
	back: function(){
		this.setState({
			gallery: 'main'
		});
	},
	displayGallery: function(){
		if(this.state.gallery === 'main'){
			return <MainGallery goTo={ this.goTo } />
		}else{
			return <Album album={this.state.gallery} back={ this.back }/>;
		}
	},
	render: function() {
    return (
      <div className='gallery'>
      	{ this.displayGallery() }
      </div>
    );
  }
});

module.exports = Gallery;