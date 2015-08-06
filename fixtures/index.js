'use strict'

module.exports = function (options) {
  var jsf = require('json-schema-faker')
  var usersDef = require('./users')(options.users)
  var groupsDef = require('./groups')(options.groups)
  var threadsDef = require('./threads')(options.threads)
  var messagesDef = require('./messages')(options.messages)

  // Create a few users.
  var users = jsf(usersDef)
  console.log('Created ' + users.length + ' users')

  // Create a few groups.
  var groups = jsf(groupsDef)
  console.log('Created ' + groups.length + ' groups')

  // Create a few threads per group.
  var threads = groups.reduce(function (memo, group) {
    var groupThreads = jsf(threadsDef)
    groupThreads.forEach(function (groupThread) {
      group.threads.push(groupThread.id)
      groupThread.group = group.id
    })

    memo.push.apply(memo, groupThreads)
    return memo
  }, [])
  console.log('Created ' + threads.length + ' threads')

  // Create a few messages per thread.
  var messages = threads.reduce(function (memo, thread) {
    var threadMessages = jsf(messagesDef)
    threadMessages.forEach(function (threadMessage) {
      thread.messages.push(threadMessage.id)
      threadMessage.thread = thread.id
      threadMessage.author = users[Math.floor(Math.random() * users.length)].id
    })

    memo.push.apply(memo, threadMessages)
    return memo
  }, [])
  console.log('Created ' + messages.length + ' messages')

  return {
    user: users,
    group: groups,
    thread: threads,
    message: messages
  }
}
