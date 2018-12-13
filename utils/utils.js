let add = (a, b) => a + b;

let asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

let square = (x) => x * x;

let asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
};


let setName = (user, fullName) => {
  let name = fullName.split(' ');
  user.firstName = name[0];
  user.lastName = name[1];
  return user;
};

module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare
};
