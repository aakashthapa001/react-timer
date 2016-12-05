var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>          
          <Nav/>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
