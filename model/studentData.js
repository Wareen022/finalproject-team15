var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var studentSchema = new Schema({
  // id is created automatically
  student_number: {
    type: String,
    required: [true, 'Fill up Student Number']
    
  },
  last_name: {
    type: String,
    required: [true, 'Fill up Last Name']
  },
  student_number: String,
  firstName: String,
  lastName: String,
  email: String,
  studentNumber: String,
  section: String,
  password: String,
  passwordCon: String,
  createdate: Date,
  updatedate: String,
  notes: [{
    postedDate: {
      type: Date,
      'default': Date.now
    }, 
    note: String
  }]
});

studentSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('studentData', studentSchema);