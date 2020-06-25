const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now,
      
    },
  
    exercises: {
      type: String,
      name: String,
      trim: true,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    }
})
     

WorkoutSchema.methods.completed = function() {
    this.day = `${this.day}...Complete!`;
    return this.day;
  };
  
  WorkoutSchema.methods.exercise = function() {
    this.exercises = `${this.exercises} are all done`;
    return this.exercises;
  }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
