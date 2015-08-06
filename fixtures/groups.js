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
        'name': {
          'type': 'string',
          'faker': 'company.companyName'
        },
        'description': {
          'type': 'string',
          'faker': 'lorem.sentence'
        },
        'avatar': {
          'type': 'string',
          'faker': 'image.business'
        },
        'threads': {
          'type': 'array'
        }
      },
      'required': ['id', 'name', 'avatar', 'threads']
    },
    'minItems': options.min,
    'maxItems': options.max
  }
}
