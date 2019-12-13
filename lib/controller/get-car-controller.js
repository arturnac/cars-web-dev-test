const { asyncController } = require('../utils/async-controller');
const { getCar } = require('../repository/car-repository');
const _ = require('lodash')

async function getCarController(req, res, next) {
    const id = _.get(req.params, 'id');

    if (!id) {
        throw new Error('Id not provided');
    }

    req.data = await getCar({ db: req.db, id }).catch((err) => {
        throw new Error(err)
    });

    next();
}

module.exports = asyncController(getCarController);