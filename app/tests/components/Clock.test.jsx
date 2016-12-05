var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Clock = require('Clock');

// Test start
describe('Clock', () => {

  // test if Clock component exists
  it('should exist', () => {
    expect(Clock).toExist();
  });

  // render test
  describe('render', () => {
    if('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>),
          $el = $(ReactDOM.findDOMNode(clock)),
          actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  // test if formatSeconds is correct
  describe('formatSeconds', () => {

    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>),
          seconds = 615,
          expected = '10:15',
          actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>),
          seconds = 61,
          expected = '01:01',
          actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

  });

});
