'use strict';

class EvohomeClient {

    constructor(log) {
        this.log = log;
        this.baseUrl = 'https://tccna.resideo.com/WebAPI/emea/api/v1';
        this.token = null;
    }

    setToken(token) {
        this.token = token;
    }

    async get(path) {
        this.log.debug(`GET ${path}`);
    }

    async post(path, body) {
        this.log.debug(`POST ${path}`);
    }

    async put(path, body) {
        this.log.debug(`PUT ${path}`);
    }

}

module.exports = EvohomeClient;
