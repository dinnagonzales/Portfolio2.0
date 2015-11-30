/**
 * @jsx React.DOM
 */
var React = require('react');
var Icon = require('./common/icon');

var About = React.createClass({
  render: function() {
    return (
      <div className='about'>
        <div className='row'>
            <div className='medium-12 columns'>
                <h5 className='header'>About <Icon type='about'/></h5>
            </div>
        </div>
        <div className='row'>
            <div className='medium-6 columns'>
              <div className='connect'>
                <a href='https://www.docdroid.net/vCJgnlj/dinnagonzaleswebdeveloperresume.pdf.html' target='_blank'><div>
                  <Icon type='resume'/>Download my resume
                </div></a>
                <a href="mailto:dinnagonzales.05@gmail.com" target="_top"><div>
                  <Icon type='mail' />Email me
                </div></a>
                <a href='https://www.linkedin.com/in/dinnagonzales' target='_blank'><div>
                  <Icon type='linkedIn'/>LinkedIn
                </div></a>
                <a href='https://github.com/dinnagonzales' target='_blank'><div>
                  <Icon type='github'/>Github
                </div></a>
              </div>
            </div>
            <div className='medium-6 columns text'>
                <p>
                  I am passionate about building beautiful websites that aim to give meaningful and memorable user experiences. 
                </p>
                <p>
                  My background in Psychology and my deep love for all things creative has motivated me to pursue a career in front-end web development.
                </p>
                <p>
                  I am driven, hard-working, and I extremely enjoy writing code.
                </p>
                <p>
                  I have professional experience building the UI of web applications from the ground up. As part of the front-end team, I built reusable components in HTML, Mustache, Handlebars and ReactJS. I worked with CSS, SASS,  Bootstrap, and  Foundation to create mobile-responsive versions of product mock-ups. I worked with Backbone.js  and RESTful APIs. I have participated in code reviews and code refactoring with Git version control. I have experience in debugging and edge-case user testing.  Overall, I have displayed my ability to learn quickly and pick up best coding practices from working with talented senior software engineers.
                </p>
                <p>
                  On the side, I also have extensive experience with Adobe Photoshop. I have worked with clients in coming up with logos, invitations, and website mocks.
                </p>
                <p>
                  I thrive in design-driven development and I work on my craft everyday. I love where I’m currently at professionally and I’m looking forward to my next great experience.
                </p>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = About;