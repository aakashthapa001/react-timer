var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    CountdownForm = require('CountdownForm');

// Start test
describe('CountdownForm', () => {
  // test if CountdownForm exists
  it('should exists', () => {
    expect(CountdownForm).toExist();
  });

  // test if valid seconds is entered
  it('should call onSetCountdown if valid seconds is entered', () => {
    var spy = expect.createSpy(),
        countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
        $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  // test if valid seconds is entered
  it('should call not call onSetCountdown if invalid seconds is entered', () => {
    var spy = expect.createSpy(),
        countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
        $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'abc';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled('abc');
  });

});
