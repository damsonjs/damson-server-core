'use strict';

/**
 * Pushes task for client.
 * @param {string} client Client identificator
 * @param {object} task Task information
 * @param {string} task.task_name Damson task name
 * @param {object} task.options Damson task arguments
 * @param {string} task.driver_name Damson driver name
 */
function pushTask(client, task) {
  /*jshint validthis: true */
  if (!this.tasks[client]) {
    this.tasks[client] = [];
  }
  this.tasks[client].push(task);
}

/**
 * Pops task for client.
 * @param {string} client Client identificator
 * @return {object|undefined} Task information or undefined if no tasks found
 */
function popTask(client) {
  /*jshint validthis: true */
  if (!this.tasks[client]) {
    this.tasks[client] = [];
  }
  return this.tasks[client].pop();
}

function DamsonServer() {
  this.tasks = [];
}

DamsonServer.prototype.pushTask = pushTask;
DamsonServer.prototype.popTask = popTask;

module.exports = DamsonServer;