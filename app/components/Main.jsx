var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          <Nav/>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
