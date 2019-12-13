const express = require('express');
const router = express.Router();
const { defineDatabaseToRequest, defineDatabase } = require('../middleware/request-handler');
const responseHandler = require('../middleware/response-handler');
const getCarsController = require('../controller/get-cars-controller');
const addCarController = require('../controller/add-car-controller');
const getCarController = require('../controller/get-car-controller');
const updateCarController = require('../controller/update-car-controller');
const deleteCarController = require('../controller/delete-car-controller');
const MemoryDB = require('../databases/MemoryDB');

defineDatabase(new MemoryDB());

router.get('/cars',
    defineDatabaseToRequest,
    getCarsController,
    responseHandler
);

router.get('/cars/:id',
    defineDatabaseToRequest,
    getCarController,
    responseHandler
);

router.post('/cars',
    defineDatabaseToRequest,
    addCarController,
    responseHandler
);

router.delete('/cars/:id',
    defineDatabaseToRequest,
    deleteCarController,
    responseHandler
);

router.put('/cars/:id',
    defineDatabaseToRequest,
    updateCarController,
    responseHandler
);



module.exports = router;

