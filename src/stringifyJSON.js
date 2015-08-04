// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function') {
    return '';
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return String(obj);
  }
  
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
  	var jsonString = '[';
  	for (var i = 0; i < obj.length; i++) {
  		jsonString += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        jsonString += ',';
      }
  	}
  	jsonString += ']';
  	return jsonString;
  }

  if (typeof obj === 'object') {
  	var jsonString = '{'
    var index = 0;
  	for (var key in obj) {
      if (typeof key === 'function' ||
          typeof key === 'undefined' ||
          typeof obj[key] === 'function' ||
          typeof obj[key] === 'undefined') {
        continue;
      }
  		jsonString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      if (index < Object.keys(obj).length - 1) {
        jsonString += ',';
      }
      index++;
  	}
  	jsonString += '}';
  	return jsonString;
  }


};

console.log(stringifyJSON({}));