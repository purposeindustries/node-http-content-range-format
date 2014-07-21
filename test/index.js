var format = require('../');

describe('#format', function() {
  it('should handle simple cases', function() {
    format({
      unit: 'items',
      first: 0,
      last: 9,
      length: 100
    }).should.equal('items 0-9/100');
  });
  it('should handle unknown length', function() {
    format({
      unit: 'items',
      first: 0,
      last: 9,
    }).should.equal('items 0-9/*');
  });
  it('should handle unsatisfied range', function() {
    format({
      unit: 'items',
      length: 100
    }).should.equal('items */100');
  });
  it('should handle errors', function() {
    (function() {
      format()
    }).should.throw();
    (function() {
      format({
        foo: 2
      });
    }).should.throw();
  });
});
