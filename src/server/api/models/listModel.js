'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListSchema = new Schema({
  name_list: {
    type: String,
    required: 'Kindly enter the name of the list'
  },
  items: []
});

var ListItemsSchema = new Schema({
    name_item: {
        type: String,
        required: 'Insert name of the item in the list'
    }
});

module.exports = mongoose.model('Lists', ListSchema);