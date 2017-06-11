var React = require('react');

'use strict';

var hello = 'hello';

var SayHi = React.createClass ({


  render: function() {
    var hello = 'hi';
    
    return (
      console.log(hello)
    );
  }
});


module.exports = SayHi;
