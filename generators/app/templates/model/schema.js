const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const <%= model.camelName %>Schema = new Schema({
  title: { type: String, required: true },
  body:  { type: String }
});


module.exports = mongoose.model('<%= model.pascalName %>', <%= model.camelName %>Schema);
