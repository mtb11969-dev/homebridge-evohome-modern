'use strict';

class EvohomePlatform {

  constructor(log, config, api) {

    this.log = log;
    this.config = config || {};
    this.api = api;

    this.username = this.config.username;
    this.password = this.config.password;

    this.log.info('Homebridge Evohome Modern starting...');
  }

}

module.exports = EvohomePlatform;
