'use strict'

module.exports = function (options) {
  var fortune = require('fortune')
  var store = require('./store')(options)

  return {
    methods: fortune.methods,

    http: function (httpOptions) {
      return fortune.net.http(store, httpOptions)
    },

    ws: function (wsOptions, change) {
      return fortune.net.websocket(store, wsOptions, change)
    }
  }
}
