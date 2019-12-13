const resCodes = require('../utils/response-codes');
function responseHandler(req, res) {
    doResponse(req, res);
}

function doResponse(req, res) {
    const response = {
        code: resCodes.SUCCESS,
        data: req.data,
    };


    res.json(response);
}

module.exports = responseHandler;