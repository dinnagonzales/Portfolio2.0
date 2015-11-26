/**
 * @jsx React.DOM
 */
var React = require('react');
var photos = require('./common/projects');
 var WebDesignProjects = require('./web-design');
var DesignProjects = require('./design');

var Photography = React.createClass({
  displayName: 'Photography',
  render: function() {
    return (
      <div>
        <WebDesignProjects />
        <DesignProjects /> 
      
        <div className='photography row'>
          <h4 className='photography-header'>Photography</h4>
          <hr/>
          <div className='medium-6 columns'>
            <a href={ photos.pandora.jason.link } target='_blank'>
              <figure>
                <img src={ photos.pandora.jason.image1 } />
                <figcaption>Jason Derulo, Pandora Summer Crush 2015</figcaption>
              </figure>
            </a>
          </div>
          <div className='medium-6 columns'>
            <a href={ photos.pandora.jason.link } target='_blank'>
              <figure>
                <img src={ photos.pandora.jason.image2 } />
                <figcaption>Steve Aoki, Pandora Summer Crush 2015</figcaption>
              </figure>
            </a>
          </div>
          
          <div className='medium-6 columns'>
            <a href={ photos.pandora.iggy.link } target='_blank'>
              <figure>
                <img src={ photos.pandora.iggy.image1 } />
                <figcaption>Rita Ora, Pandora Summer Crush 2014</figcaption>
              </figure>
            </a>
          </div>
          <div className='medium-6 columns'>
            <a href={ photos.pandora.iggy.link } target='_blank'>
              <figure>
                <img src={ photos.pandora.iggy.image2 } />
                <figcaption>Iggy Azaela, Pandora Summer Crush 2014</figcaption>
              </figure>
            </a>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Photography;