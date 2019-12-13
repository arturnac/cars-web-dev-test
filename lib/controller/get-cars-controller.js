const { asyncController } = require('../utils/async-controller');
const { getCars } = require('../repository/car-repository');

async function getCarsController(req, res, next) {
    req.data = await getCars({ db: req.db }).catch((err) => {
        throw new Error(err)
    });

    next();
}

module.exports = asyncController(getCarsController);