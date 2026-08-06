'use strict';

class EvohomeAuth {

    constructor(log) {
        this.log = log;
    }

    async login(username, password) {
        this.log.info('Evohome login...');
    }

    async refresh(refreshToken) {
        this.log.debug('Refreshing token...');
    }

}

module.exports = EvohomeAuth;
