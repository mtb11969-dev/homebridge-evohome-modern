'use strict';

module.exports = (api) => {
    api.registerPlatform(
        'Homebridge Evohome Modern',
        'EvohomeModern',
        require('./platform')
    );
};
