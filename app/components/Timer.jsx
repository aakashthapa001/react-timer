var React = require('react'),
    Clock = require('Clock');

// Create Timer Component
var Timer = React.createClass({
  render: function() {
    return(
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

// Export Timer component
module.exports = Timer;
