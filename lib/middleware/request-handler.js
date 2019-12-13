const _ = require('lodash');

// temporary solution for MemoryDb
module.exports.defineDatabase = (db) => {
    if (!this.db) {
        this.db = db;
    }
};

module.exports.defineDatabaseToRequest = (req, res, next) => {
    if (!req.db) {
        req.db = this.db;
    }

    next();
};
