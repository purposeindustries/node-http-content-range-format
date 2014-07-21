module.exports = function format(obj) {
  if(!obj) {
    throw new Error('Missing format object');
  }
  if(!obj.unit) {
    throw new Error('Missing format unit');
  }
  obj.length = obj.length == undefined
             ? '*'
             : obj.length;
  if(obj.first == undefined) {
    return obj.unit + ' ' + '*' + '/' + obj.length;
  }
  return obj.unit + ' ' + obj.first + '-' + obj.last + '/' + obj.length;
};
