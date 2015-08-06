'use strict'

module.exports = function (options) {
  var fortune = require('fortune')
  var microApi = require('fortune-micro-api');
  var fixtures = require('../fixtures')(options)

  var store = fortune.create({
    serializers: [
      {
        type: microApi,
        options: {obfuscateURIs: false}
      }
    ]
  })

  // Type definitions:

  store.defineType('user', {
    firstName: {type: String},
    lastName: {type: String},
    jobTitle: {type: String},
    avatar: {type: String}
  })

  store.defineType('group', {
    name: {type: String},
    description: {type: String},
    avatar: {type: String},

    threads: {link: 'thread', inverse: 'group', isArray: true}
  })

  store.defineType('thread', {
    group: {link: 'group', inverse: 'threads'},
    messages: {link: 'message', inverse: 'thread', isArray: true}
  })

  store.defineType('message', {
    body: {type: String},
    timestamp: {type: Date},

    thread: {link: 'thread', inverse: 'messages'},
    author: {link: 'user'}
  })

  // Store initialization:

  store.connect()
    .then(function () {
      return Promise.all(Object.keys(fixtures).map(function (type) {
        return store.adapter.delete(type)
      }))
    })
    .then(function () {
      return Promise.all(Object.keys(fixtures).map(function (type) {
        return store.adapter.create(type, fixtures[type])
      }))
    })
    .catch(function (error) {
      store.disconnect()
      console.error('Fortune error: ', error.message)
      throw error
    })

  return store
}
