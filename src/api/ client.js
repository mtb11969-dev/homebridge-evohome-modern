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

    async request(method, path, body = null) {

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (this.token) {
            options.headers.Authorization = this.token;
        }

        if (body) {
            options.body = JSON.stringify(body);
        }

        this.log.debug(`${method} ${this.baseUrl}${path}`);

        // Ide kerül majd a fetch() hívás.
        return null;
    }

    async get(path) {
        return this.request('GET', path);
    }

    async post(path, body) {
        return this.request('POST', path, body);
    }

    async put(path, body) {
        return this.request('PUT', path, body);
    }

}

module.exports = EvohomeClient;
