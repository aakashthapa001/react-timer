var React = require('react'),
    Clock = require('Clock');

// Create Countdown Component
var Countdown = React.createClass({
  render: function() {
    return(
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

// Export Countdown component
module.exports = Countdown;
