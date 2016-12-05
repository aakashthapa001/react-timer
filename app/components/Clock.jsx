var React = require('react');

// create Clock component
var Clock = React.createClass({
  // get default props of not any
  getDefaultProps: function() {
    totalSeconds: 0
  },
  // set PropType to number because time should be a number
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60,
        minutes = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },
  render: function() {
    var {totalSeconds} = this.props;

    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

// export Clock component
module.exports = Clock;
