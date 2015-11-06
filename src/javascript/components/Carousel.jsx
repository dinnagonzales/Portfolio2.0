/**
 * @jsx React.DOM
 */
var React = require('react')
var Slider = require('react-slick')

var Carousel = React.createClass({
  render: function () {
   var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    /*
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
    */
    return (
      <div>HELLO</div>
    );
  }
});

module.exports = Carousel