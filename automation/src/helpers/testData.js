module.exports = {
  users: {
    standardUser: {usernameField: 'standard_user', passwordField: 'secret_sauce'},
    lockedOutUser: {usernameField: 'locked_out_user', passwordField: 'secret_sauce'},
    noPassword: {usernameField: 'standars_user', passwordField: ''},
    noUsername: {usernameField: '', passwordField: 'secret_sause'},
    //problem_user: {usernameField: 'problem_user', passwordField: 'secret_sauce'},
    //performance_glitch_user: {usernameField: 'performance_glitch_user', passwordField: 'secret_sauce'},
    //error_user: {usernameField: 'error_user', passwordField: 'secret_sauce'},
    //visual_user: {usernameField: 'visual_user', passwordField: 'secret_sauce'}
  },

  errorElement: {
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
    noPassword: 'Epic sadface: Password is required',
    noUsername: 'Epic sadface: Username is required'
  },

  urls: {
    login: '',
    inventory: 'inventory.html',
  }
};
