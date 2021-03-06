/**
 * @jsx React.DOM
 */
var React = require('react');
var $ = require('jquery');
var Icon = require('./common/icon');
var design = require('./common/projects').design;

var WebDesignProjects = React.createClass({
  displayName: 'Web Design Projects',
  toggleView: function(e){
    $(e.currentTarget).toggleClass('rotate');
    $(e.target).closest('.proj').toggleClass('open');
  },
  render: function() {
    return (
      <div className='row design-projects'>
        <h4 className='design-header'>Design Consultation</h4>
        <hr/>
        <div className='medium-12 columns'>
          <div className='proj'>
            <div className='details'>
              <a href={ design.uccf.site }><h5>UCCF</h5></a>
              <p>{ design.uccf.description }</p>
              <div className='view' onClick={ this.toggleView }>
                <Icon type='open'/>
              </div>
            </div>
            <div className='row'>
              <div className='medium-12 large-6 columns'>  
                <img src={ design.uccf.image } />
              </div>
              <div className='medium-12 large-6 columns'>              
                <img src={ design.uccf.image2 } />
              </div>
            </div>
          </div>
          
          <div className='proj'>
            <div className='details'>
              <a href={ design.lrd.site }><h5>Logical Reality Design</h5></a>
              <p>{ design.lrd.description }</p>
              <div className='view show-for-medium-only' onClick={ this.toggleView }>
                <Icon type='open'/>
              </div>
            </div>
            <div className='row'>
              <div className='medium-12 large-6 columns'>  
                <img src={ design.lrd.image2 } />
              </div>
              <div className='medium-12 large-6 columns'>              
                <img src={ design.lrd.image } />
              </div>
            </div>
          </div>

          <div className='proj'>
            <div className='details'>
              <a href={ design.a2q2.site }><h5>A2Q2</h5></a>
              <p>{ design.a2q2.description }</p>
              <div className='view' onClick={ this.toggleView }>
                <Icon type='open'/>
              </div>
            </div>
            <div className='row'>
              <div className='medium-12 large-6 columns'>  
                <img src={ design.a2q2.image2 } />
              </div>
              <div className='medium-12 large-6 columns'>              
                <img src={ design.a2q2.image } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WebDesignProjects;