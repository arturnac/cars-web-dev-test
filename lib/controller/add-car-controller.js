const { asyncController } = require('../utils/async-controller');
const { addCar } = require('../repository/car-repository');

async function addCarController(req, res, next) {
    req.data = await addCar({ db: req.db, data: req.body }).catch((err) => {
        throw new Error(err)
    });

    next();
}

module.exports = asyncController(addCarController);

