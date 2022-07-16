const { signIn, signUp } = require('./users.service')

async function login(req, res, next) {
  const { email, password } = req.body
  try {
    const user = await signIn({ email, password })
    res.status(201).json({status: 200, success: true, message: 'login completed', user})
  } catch (err) {
    res.status(400).json({status: 400, success: false, message: 'An error has occurs'})
  }
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