'use strict'

module.exports = function (options) {
  return {
    'type': 'array',
    'items': {
      'type': 'object',
      'properties': {
        'id': {
          'type': 'string',
          'faker': 'random.uuid'
        },
        'firstName': {
          'type': 'string',
          'faker': 'name.firstName'
        },
        'lastName': {
          'type': 'string',
          'faker': 'name.lastName'
        },
        'jobTitle': {
          'type': 'string',
          'faker': 'name.jobTitle'
        },
        'avatar': {
          'type': 'string',
          'faker': 'image.avatar'
        }
      },
      'required': ['id', 'firstName', 'lastName', 'avatar']
    },
    'minItems': options.min,
    'maxItems': options.max
  }
}
