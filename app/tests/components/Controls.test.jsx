var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Controls = require('Controls');

// Start test
describe('Controls', () => {
  it('should exists', () => {
    expect(Controls).toExist();
  });
  // test if countdownStatus is started
  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>),
          $el = $(ReactDOM.findDOMNode(controls)),
          $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    // test if countdownStatus is paused
    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>),
          $el = $(ReactDOM.findDOMNode(controls)),
          $playButton = $el.find('button:contains(Start)');

      expect($playButton.length).toBe(1);
    });
  });
});
