/**
 * @jsx React.DOM
 */
var React = require('react');
var photos = require('./common/photos').album;
var Icon = require('./common/icon');

var Album = React.createClass({
      render: function() {
      var album = this.props.album;
      var photo = photos[album];
      return (
      <div className='album row'>
            <div className='back' onClick={this.props.back}>
                  <Icon type='back'/> 
                  <span>Back To Gallery</span>
            </div>
            <div className='small-12 small-centered columns'>
                  <h3 className='album-caption'>{ photo.caption }</h3>
                  <div className='row'>
                        <div className='medium-4 columns photo-gallery'>
                              <img src={ photo.one.photo }/>
                              <div className='caption'>
                                    <a href={ photo.one.link } target='_blank'><span>{ photo.one.caption }</span></a>
                              </div>
                        </div>
                        <div className='medium-4 columns photo-gallery'>
                              <img src={ photo.two.photo }/>
                              <div className='caption'>
                                    <a href={ photo.two.link } target='_blank'><span>{ photo.two.caption }</span></a>
                              </div>
                        </div>
                        <div className='medium-4 columns photo-gallery'>
                              <img src={ photo.three.photo }/>
                              <div className='caption'>
                                    <a href={ photo.three.link } target='_blank'><span>{ photo.three.caption }</span></a>
                              </div>
                        </div>
                  </div>
                  <div className='row'>
                        <div className='medium-6 columns photo-gallery'>
                              <img src={ photo.four.photo }/>
                              <div className='caption'>
                                    <a href={ photo.four.link } target='_blank'><span>{ photo.four.caption }</span></a>
                              </div>
                        </div>
                        <div className='medium-6 columns photo-gallery'>
                              <img src={ photo.five.photo }/>
                              <div className='caption'>
                                    <a href={ photo.five.link } target='_blank'><span>{ photo.five.caption }</span></a>
                              </div>
                        </div>
                  </div>
                   <div className='row'>
                        <div className='medium-4 columns photo-gallery'>
                              <img src={ photo.six.photo }/>
                              <div className='caption'>
                                    <a href={ photo.six.link } target='_blank'><span>{ photo.six.caption }</span></a>
                              </div>
                        </div>
                        <div className='medium-4 columns photo-gallery'>
                              <img src={ photo.seven.photo }/>
                              <div className='caption'>
                                    <a href={ photo.seven.link } target='_blank'><span>{ photo.seven.caption }</span></a>
                              </div>
                        </div>
                        <div className='medium-4 columns photo-gallery'>
                              <img src={ photo.eight.photo }/>
                              <div className='caption'>
                                    <a href={ photo.eight.link } target='_blank'><span>{ photo.eight.caption }</span></a>
                              </div>
                        </div>
                  </div>
            </div>

      </div>
    );
  }

});

module.exports = Album;