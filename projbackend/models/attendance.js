const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const attendanceSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      trim: true,
      required: true, 
      maxlenght: 32,
    },
    rollNum: {
      type: Number,
      required: true,
      maxlenght: 200,
      unique :true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);