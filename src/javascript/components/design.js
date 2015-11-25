/**
 * @jsx React.DOM
 */
var React = require('react');
var $ = require('jquery');
var Icon = require('./common/icon');
var design = require('./common/projects').design;

var DesignProjects = React.createClass({
  displayName: 'Design Projects',
  toggleView: function(e){
    $(e.currentTarget).toggleClass('rotate');
    $(e.target).closest('.proj').toggleClass('open');
  },
  render: function() {
    return (
      <div className='row design-projects'>
        <h4 className='design-header'>Graphic Design</h4>
        <hr/>

        <div className='medium-12 columns'>
          <div className='proj design'>
            <div className='details'>
              <h5>Logo Design</h5>
            </div>
            <div className='row'>
              <div className='medium-12 large-6 columns'>
                <figure>
                  <figcaption>Forged Autosport</figcaption>
                  <img src={ design.other.logo1 } />
                </figure>
              </div>
              <div className='medium-12 large-6 columns'>            
                <figure>
                  <figcaption>Logical Reality Design</figcaption>  
                  <img src={ design.other.logo2 } />
                </figure>
              </div>
            </div>
          </div>

          <div className='proj design'>
            <div className='details'>
              <h5>T-shirt Design</h5>
            </div>
            <div className='row'>
              <figcaption>Singles For Christ</figcaption>
              <div className='medium-12 large-6 columns'>  
                <img src={ design.other.shirt1 } />
              </div>
              <div className='medium-12 large-6 columns'>              
                <img src={ design.other.shirt2 } />
              </div>
            </div>
          </div>

          <div className='proj design'>
            <div className='details'>
              <h5>Invitations</h5>
            </div>
            <div className='row'>
              <div className='medium-12 large-6 columns'>  
                <img src={ design.other.invite1 } />
              </div>
              <div className='medium-12 large-6 columns'>              
                <img src={ design.other.invite2 } />
              </div>
              <div className='medium-12 large-12 columns'>              
                <img src={ design.other.invite3 } />
              </div>
            </div>
          </div>
          
         </div>
      </div>
    );
  }
});

module.exports = DesignProjects;