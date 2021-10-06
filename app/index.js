const addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const result = addDays(new Date(2020, 8, 22), int(days));
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getYear()}`;
};

module.exports = getDateAfterXDays;
