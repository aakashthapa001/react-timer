var React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm');

// Create Countdown Component
var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function() {
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

// Export Countdown component
module.exports = Countdown;
