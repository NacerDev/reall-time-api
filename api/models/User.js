/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
  id:{
    type :'integer',
    primaryKey: true,
    unique: true
  },
  firstname: {
      type: 'string',
      defaultsTo: 'firstname'
    },
     lastname: {
      type: 'string',
      defaultsTo: 'lastname'
    }, 
    version: {
      type: 'string',
      defaultsTo: 'version'
    }, 
    phonePrefixNumber: {
      type: 'string',
      defaultsTo: 'phonePrefixNumber'
    }, 
    phoneNumber: {
      type: 'string',
      defaultsTo: 'phoneNumber'
    },
    currency: {
      type: 'string',
      defaultsTo: 'currency'
    }, 
    tutorial: {
      type: 'string',
      defaultsTo: 'tutorial'
    }, 
    status: {
      type: 'string',
      defaultsTo: 'status'
    }, 
  
    stripeId: {
      type: 'string',
      defaultsTo: 'stripeId'
    }, 
    parentCode: {
      type: 'string',
      defaultsTo: 'parentCode'
    }, 
    birthDate: {
      type: 'string',
      defaultsTo: 'birthDate'
    }, 
    gender: {
      type: 'string',
      defaultsTo: 'gender'
    }, 
    salt: {
      type: 'string',
      defaultsTo: 'salt'
    }, password: {
      type: 'string',
      defaultsTo: ''
    },
    active: {
      type: 'string',
      defaultsTo: ''
    },
    email: {
      type: 'string',
      defaultsTo: ''
    },
    photoUrl: {
      type: 'string',
      defaultsTo: ''
    },
    weight: {
      type: 'string',
      defaultsTo: ''
    },
    height: {
      type: 'string',
      defaultsTo: ''
    },
    shape: {
      type: 'string',
      defaultsTo: ''
    },
    handicap: {
      type: 'string',
      defaultsTo: ''
    },
    pushNotificationToken: {
      type: 'string',
      defaultsTo: ''
    },
    sponsorCode: {
      type: 'string',
      defaultsTo: ''
    },
    transportation: {
      type: 'string',
      defaultsTo: ''
    }

  }

};

