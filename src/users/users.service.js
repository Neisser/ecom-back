const Users = require('./users.model')


async function signIn({email, password}){
  const user = await Users.findOne({email})
  console.log(user)
  if(user.password !== password ) throw new Error('wrong password')

  delete user.password
  return user
}

async function signUp(payload){
  try {
    const user = new Users(payload);
    await user.save();
  } catch (err) {
    console.log({signUpErr: err})
    throw new Error(err)
  }
}

module.exports = { signIn, signUp }

