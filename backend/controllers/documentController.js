import asyncHandler from 'express-async-handler'
import Document from '../models/documentModel.js'

const createDoc = asyncHandler(async (req, res) => {
  const { createdAt } = req.body
  
  let document = new Document({
    uid: req.user,
    title: 'Untitled Document',
    createdAt
  })

  document = await document.save()
  res.json(document)
})

const getMyDocuments = asyncHandler(async (req, res) => {
  let documents = await Document.find({uid: req.user})
  res.json(documents)
})

const updateDocTitle = asyncHandler(async (req, res) => {
  const {
    id,
    title
  } = req.body

  const document = await Document.findByIdAndUpdate(id, {title})
  res.json(document)
})

const getDocumentById = asyncHandler(async (req, res) => {
  const document = await Document.findById(req.params.id)
  res.json(document)
})

const saveData = async (data) => {
  let document = await Document.findById(data.room)
  document.content = data.delta
  document = await document.save()
}

export {
  createDoc,
  getMyDocuments,
  updateDocTitle,
  getDocumentById,
  saveData
}