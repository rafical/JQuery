describe("testing correct username", function() {
  beforeEach(function() {
   document.body.innerHTML='<div class="login-page id="app"><div class="form"><form class="login-form"><input type="text" id="username" placeholder="username"/><input type="password" id="password" placeholder="password"/><button id="login" onclick="login()">LOGIN</button></form></div> </div>';
     
  });
    afterEach(function() {
    });
   
  it ("testing correct username", function() {
    $('#username').val('admin');
    $('#password').val('password');    
    spyOn(window, 'alert');
    $('#login').trigger( "click" );
    expect(window.alert).toHaveBeenCalledWith('You are a valid user');
  });
});


describe("testing incorrect username", function() {
  beforeEach(function() {
   document.body.innerHTML='<div class="login-page id="app"><div class="form"><form class="login-form"><input type="text" id="username" placeholder="username"/><input type="password" id="password" placeholder="password"/><button id="login" onclick="login()">LOGIN</button></form></div> </div>';
  });
  afterEach(function() {
    });
   
  it ("testing incorrect username", function() {
    $('#username').val('admin');
    $('#password').val('123');    
    spyOn(window, 'alert');
    $('#login').trigger( "click" );
    expect(window.alert).toHaveBeenCalledWith('You are not a valid user');
  });
});
