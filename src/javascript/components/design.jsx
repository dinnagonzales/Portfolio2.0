/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');
var design = require('./common/projects').design;

var DesignProjects = React.createClass({
  getInitialState: function (){
    return{
      a: false,
      uccf: false,
      lrd: false
    };
  },
  openBox: function(){
    
    
    this.setState({
      a: !this.state.a
    });
  },
  render: function() {
    var style = this.state.a ? { overflow: 'auto', height: 'auto'} : {};
    return (
      <div className='row design-projects'>
        <div className='medium-12 columns'>
          
          <div className='row proj' style={ style }>
            <div onClick={ this.openBox }><Icon type='open'/></div>
            <div className='medium-6 columns'>
              <img src={ design.a2q2.image } />
            </div>
            <div className='medium-6 columns'>
              <img src={ design.a2q2.image2 } />
            </div>
          </div>

          <div className='row proj'>
            <div className='medium-6 columns'>
              <img src={ design.uccf.image } />
            </div>
            <div className='medium-6 columns'>
              <img src={ design.uccf.image2 } />
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = DesignProjects;