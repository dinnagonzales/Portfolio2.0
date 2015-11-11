/**
 * @jsx React.DOM
 */
var React         = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      
    }
  },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <SurveyFields fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <Confirmation fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
    }
  },

  render: function() {
    return (
      <main>
          <div className="row">
            <div className="one-half column">1/2</div>
            <div className="one-half column">1/2</div>
          </div>
        
        <div className="photos">
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-49.jpg?w=620" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-86.jpg?w=620" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-60.jpg?w=620" alt="" />
          <img className='photo'  src="https://storyboxcollection.files.wordpress.com/2015/10/engagedjs-130.jpg?w=620" alt="" />
        </div>
      </main>
    )
  }
})

module.exports = Home