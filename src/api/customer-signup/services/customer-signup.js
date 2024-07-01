'use strict';

/**
 * customer-signup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-signup.customer-signup');
