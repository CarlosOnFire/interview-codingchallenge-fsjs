'use strict';

var mongoose = require('mongoose'),
  List = mongoose.model('Lists');

exports.list_all = function(req, res) {
    List.find({}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};

exports.create_list = function(req, res) {
  var new_list = new List(req.body);
  new_list.save(function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};

exports.read_list = function(req, res) {
  List.findById(req.params.listId, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};

exports.update_list = function(req, res) {
  List.findOneAndUpdate({_id: req.params.listId}, req.body, {new: true}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};


exports.delete_list = function(req, res) {
  List.remove({
    _id: req.params.listId
  }, function(err, list) {
    if (err)
      res.send(err);
    res.json({ message: 'List successfully deleted' });
  });
};