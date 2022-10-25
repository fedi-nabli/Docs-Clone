import mongoose from 'mongoose'

const documentSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  content: {
    type: Array,
    default: []
  }
})

const Document = mongoose.model('Document', documentSchema)

export default Document