'use strict';

module.exports = function(app) {
  var list = require('../controllers/listController');

  // todoList Routes List
  app.route('/lists')
    .get(list.list_all)
    .post(list.create_list);


  app.route('/list/:listId')
    .get(list.read_list)
    .put(list.update_list)
    .delete(list.delete_list);

//   app.route('/items')
//     .get(items.item_all)
//     .post(items.create_item);

//   app.route('/items/:itemId')
//     .get(list.read_item)
//     .put(list.update_item)
//     .delete(list.delete_item);

};