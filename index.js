const namess = require("../country/state/city/index.js");
const first_name = require("../utilities/utils/index.js");

const getPeopleInCity = (namess) => {
  return first_name(namess);
};

module.exports = getPeopleInCity;
