/**
 * @jsx React.DOM
 */
var React = require('react');
var Icons = require('./icons');

var Icon = React.createClass({

  render: function() {
    var type = this.props.type;
    var svg = Icons[type];
    var html = svg.icon;
    return (
      <div className="icon">
        <svg viewBox={svg.viewBox}>
          <g key={html} dangerouslySetInnerHTML={{__html: html}} />
        </svg>
      </div>
    );
  }
});

module.exports = Icon;