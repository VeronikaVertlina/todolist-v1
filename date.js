//jshint esversion:6

exports.getDate = function() {

  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return today.toLocaleDateString("en-US", options);
};

//instead of
//  module.exports.getDay = getDay;
//  function getDay() {};
exports.getDay = function() {

  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US", options);
};

// console.log(module.exports);
