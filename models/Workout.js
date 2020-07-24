const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
      
    },
  
    exercises: [
      {
      type: { type: String },
      name: { name: String },
      duration: { duration: Number },
      weight: { weight: Number },
      reps: { reps: Number },
      sets: { sets: Number },
      distance: { distance: Number },
    }
  ]
}, {
  toJSON: { virtuals: true}, //virtuals - in mongoose, cant do joins, need reference,
  toObject: { virtuals: true} //temporary columns
})
     

WorkoutSchema.virtual('totalDuration').get(function() {
    
  var total= 0;

  for (var i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration
  }
  return total;

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
