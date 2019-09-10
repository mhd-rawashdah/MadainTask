const model = require('../model/index');

exports.login = async (req, res) => {
  console.log(req.body);
  const {
    email,
    password
  } = req.body;

  if (!req.body || !req.body.email || !req.body.password) {
    res.status(422).json({
      message: 'yo! you miss`n some stuff!'  
    });
    return;
  }

  const user = await model.user.getUser(email);

  if (!user) {
    res.status(400).json({
      message: 'hey man, you sent me the wrong email.'
    });
    return;
  }
  if (user.password !== password) {
    res.status(400).json({
      message: 'hey lady, you sent me the wrong password.'
    });
    return;
  }

  delete user.password;
  res.status(200).json(user)

}