'use strict';

/**
 * update-password service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::update-password.update-password');
