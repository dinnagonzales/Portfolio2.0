/**
 * @jsx React.DOM
 */
var React = require('react');
var photo = require('./common/photos').gallery;

var MainGallery = React.createClass({
      goTo: function(e){
            var page = e.currentTarget.id;
            this.props.goTo(page);
      },
      render: function() {
      return (
            <div className='main-gallery row'>
                  <div className='small-12 small-centered columns'>
                        <div className='row'>
                              <div onClick={ this.goTo } className='medium-4 columns photo-gallery' id='engagement'>
                                    <img src={ photo.engagement.photo }/>
                                    <div className='caption'>
                                          <span>{ photo.engagement.caption }</span>
                                    </div>
                              </div>
                              <div onClick={ this.goTo } className='medium-4 columns photo-gallery' id='wedding'>
                                    <img src={ photo.wedding.photo }/>
                                    <div className='caption'>
                                          <span>{ photo.wedding.caption }</span>
                                    </div>
                              </div>
                              <div onClick={ this.goTo } className='medium-4 columns photo-gallery' id='events'>
                                    <img src={ photo.events.photo }/>
                                    <div className='caption'>
                                          <span>{ photo.events.caption }</span>
                                    </div>
                              </div>
                        </div>

                        <div className='row'>
                              <div onClick={ this.goTo } className='medium-4 columns photo-gallery' id='personal'>
                                    <img src={ photo.personal.photo }/>
                                    <div className='caption'>
                                          <span>{ photo.personal.caption }</span>
                                    </div>
                              </div>
                              <div onClick={ this.goTo } className='medium-4 columns photo-gallery' id='lifestyle'>
                                    <img src={ photo.lifestyle.photo }/>
                                    <div className='caption'>
                                          <span>{ photo.lifestyle.caption }</span>
                                    </div>
                              </div>
                                <div onClick={ this.goTo } className='medium-4 columns photo-gallery' id='portrait'>
                                    <img src={ photo.portrait.photo }/>
                                    <div className='caption'>
                                          <span>{ photo.portrait.caption }</span>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
          );
      }

});

module.exports = MainGallery;