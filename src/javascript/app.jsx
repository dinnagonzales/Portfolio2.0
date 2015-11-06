/**
 * @jsx React.DOM
 */
var React = require('react')
var Home = require('./components/home')

window.onload = function() {
  React.render(
    <Home />,
    document.getElementById('registration-form')
  )
}