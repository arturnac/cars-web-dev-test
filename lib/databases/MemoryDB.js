class MemoryDB {
    getDataById(id) {

        if (!this._data[id]) {
            return null;
        }

        return this._data[id];
    }

    getData() {
        return this._data;
    }

    setData(data) {
        if (!this._data) {
            this._data = [];
        }

        this._data.push(data);

        return this._data;
    }

    deleteById(id) {
        if (!this._data[id]) {
            return this._data;
        }

        delete this._data[id];

        return this._data;
    }

    updateData(id, data) {
        if (!this._data[id]) {
            this._data = [];
        }

        this._data[id] = data;

        return this._data;
    }
}

module.exports = MemoryDB;