//define ur model schema

import mongoose from "mongoose";

//todo document structure
const todoSchema = mongoose.Schema({
    todo: { type: String, require: true, unique: true }
})

//collection with name todos using todoSchema
const todoCollection = mongoose.model("todos", todoSchema)

export default todoCollection;