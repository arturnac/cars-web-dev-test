const carQueries = require('../quieries/in-memory/car-quieries');

module.exports.getCars = async ({ db }) => {
    return carQueries.getCars({ db });
};

module.exports.getCar = async ({ db, id }) => {
  return carQueries.getCar({ db, id });
};

module.exports.addCar = async ({ db, data }) => {
    return carQueries.addCar({ db, data });
};

module.exports.deleteCar = async ({ db, id }) => {
    return carQueries.deleteCar({ db, id });
};

module.exports.updateCar = async ({ db, id, data }) => {
    return carQueries.updateCar({ db, id, data });
};