/**
 * @jsx React.DOM
 */
var React = require('react')
var Index = require('./components/index')

window.onload = function() {
  React.render(
    <Index />,
    document.getElementById('page')
  )
}