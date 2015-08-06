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
        'body': {
          'type': 'string',
          'faker': 'lorem.paragraph'
        },
        'timestamp': {
          'type': 'string',
          'faker': 'date.past'
        }
      },
      'required': ['id', 'body', 'timestamp']
    },
    'minItems': options.min,
    'maxItems': options.max
  }
}
