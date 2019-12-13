module.exports.getCars = ({ db }) => {
    return db.getData();
};

module.exports.getCar = ({ db, id }) => {
    if (!db.getDataById(id)) {
        throw new Error(`Car with following id: ${id} does not exists, cannot get`);
    }

    return db.getDataById(id);
};

module.exports.addCar = ({ db, data }) => {
    return db.setData(data);
};

module.exports.deleteCar = ({ db, id }) => {
    if (!db.getDataById(id)) {
        throw new Error(`Car with following id: ${id} does not exists, cannot delete`);
    }

    return db.deleteById(id);
};

module.exports.updateCar = ({ db, id, data }) => {
    if (!db.getDataById(id)) {
        throw new Error(`Car with following id: ${id} does not exists, cannot update`);
    }

    return db.updateData(id, data);
};