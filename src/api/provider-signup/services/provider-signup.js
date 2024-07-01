'use strict';

/**
 * provider-signup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::provider-signup.provider-signup');
