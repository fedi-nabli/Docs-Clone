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

export {
  createDoc
}