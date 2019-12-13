const { asyncController } = require('../utils/async-controller');
const { updateCar } = require('../repository/car-repository');
const _ = require('lodash')

async function updateCarController(req, res, next) {
    const id = _.get(req.params, 'id');

    if (!id) {
        throw new Error('Id not provided');
    }

    req.data = await updateCar({ db: req.db, id, data: req.body }).catch((err) => {
        throw new Error(err)
    });

    next();
}

module.exports = asyncController(updateCarController);

