const { signIn, signUp } = require('./users.service')

async function login(req, res, next) {
  const { email, password } = req.body
  const user = await signIn({ email, password })
  res.json(user)
}

async function register(req, res, next) {
  const { name, email, password, picture } = req.body;
  try {
    await signUp({name, email, password, picture});
    res.status(201).json({status: 201, success: true, message: 'Account created'})
  } catch (error) {
    res.status(400).json({status: 400, success: false, message: 'An error has occurs'})
  }
}

module.exports = {
  login,
  register
}