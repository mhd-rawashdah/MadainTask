

const users = [{
  id: 'fe5415151sd15',
  name: "Alex Jones",
  email: 'mhd@gmail.com',
  password: '123456',
  token: '',
  profilePic: "http://lorempixel.com/500/500/people/"
}]


exports.getUserByEmail = (email) => {
  const user =  users.filter((user) => user.email === email);
  return user[0];
}

exports.getUserByToken = (token) => {
  const user = users.filter((user) => user.token === token);
  return user[0]; 
}

exports.changePassword = (email, newPassword) => {
  const user = users.filter((user) => user.email === email);
  user[0].password = newPassword;
}