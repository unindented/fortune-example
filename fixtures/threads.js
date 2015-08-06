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
        'messages': {
          'type': 'array'
        }
      },
      'required': ['id', 'messages']
    },
    'minItems': options.min,
    'maxItems': options.max
  }
}
