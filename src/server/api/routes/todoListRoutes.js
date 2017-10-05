'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/lists')
    .get(todoList.list_all_lists)
    .post(todoList.create_a_list);


  app.route('/lists/:listId')
    .get(todoList.read_a_list)
    .put(todoList.update_a_list)
    .delete(todoList.delete_a_list);
};