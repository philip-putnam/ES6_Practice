var React = require('react');
var Duplicate = require('./duplicate-variables.js')
// var Scope = require('./var-scope.js');
// var NestScope = require('./nest-scope.js');
// var LoopScope = require('./let-loop-scope.js');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Hello from App.js!</h1>
        <Duplicate />
      </div>
    );
  }
});


module.exports = App;
