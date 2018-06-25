Login.controller("loginCtrl",loginController); 
loginController.$inject = ["$scope","$window","loginAPI","DonorsAdd","$timeout"];
function loginController(scp,w,loginAPI,DonorsAdd,tOut) {
scp.signIN=true;
scp.signUP=false;
scp.addsuccess=false;
scp.typebloods = ["A Negativo","A Positivo","B Negativo","B Positivo","AB Negativo","AB Positivo","O Negativo","O Positivo"];
scp.signUpURL= "signUp";
scp.loginURL= "login";
scp.loginInvalid =false;

// call change for register
scp.register= function (){
    scp.signIN=!scp.signIN;
};
// call login
scp.LogIN = function (user) {       
       loginAPI.AuthUser(user)
           .then(function(response) {
                if (response[0] == undefined){
                            scp.loginInvalid = true;
                            var hidemsg= tOut(function () {
                                console.log( scp.loginInvalid);
                                scp.loginInvalid =false;
                            }, 1500);
                           
                }else {
                    var data = JSON.stringify(response[0]); 
                    let logado =  w.localStorage.setItem('logado',data);
                    w.location.href = "/home#!/profile";
                }
            },function(error){
                console.error(error);
            });    
            console.log(scp.loginInvalid);
}
// call add user
scp.addUser = function (user) { 
        DonorsAdd.userAdd(user)
          .then(function(response) {
            if(response.status=="400"){
                console.error("Problema ao se Registrar");
            }else{                
                if(user.blood !== undefined && user.email!== undefined &&  user.password!== undefined && user.name!== undefined){
                   scp.addsuccess=true;
                    var hidemsg= tOut(function () {
                        scp.addsuccess =false;
                    }, 1500);
                }
            }
          },function(error){
                 console.error(error);
          });    
    }
   
    
};
