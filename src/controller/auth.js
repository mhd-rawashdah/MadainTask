const model = require('../model/index');

exports.login = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    if (!req.body || !req.body.email || !req.body.password) {
      res.status(422).json({
        message: 'yo! you miss`n some stuff!'
      });
      return;
    }

    let user = await model.user.getUserByEmail(email);

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

    res.status(200).json({name: user.name, email: user.email, token: user.token, profilePic: user.profilePic, phone: user.phone})
  } catch (error) {
    res.status(400).json({
      message: 'Error, please try again' + error.message
    });
  }

}


exports.changePassword = async (req, res) => {
  const {
    email,
    currentPassword,
    newPassword
  } = req.body;

  try {
    if (!req.body || !req.body.email || !req.body.currentPassword || !req.body.newPassword) {
      res.status(422).json({
        message: 'yo! you miss`n some stuff!'
      });
      return;
    }
    // get user by email
    const user = await model.user.getUserByEmail(email);
    console.log(user);
    if (user.password !== currentPassword) {
      res.status(400).json({
        message: 'hey lady, please check your current password.'
      });
      return;
    }
    //  change password
    const isPasswordChanged = await model.user.changePassword(email, newPassword);
    if (isPasswordChanged) {
      res.status(200).json({
        message: 'you are successfully changed your password'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error changing password' + error.message
    });
  }
}