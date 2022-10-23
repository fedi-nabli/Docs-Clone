import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const singup = asyncHandler(async (req, res) => {
  const { name, email, profilePic } = req.body

  let user = await User.findOne({email})

  if (!user) {
    user = new User({
      name,
      email,
      profilePic
    })

    user = await user.save()

    res.status(201)
    res.json({
      user,
      token: generateToken(user._id)
    })
  }
})

export {
  singup
}