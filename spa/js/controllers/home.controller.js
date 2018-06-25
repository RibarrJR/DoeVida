App.controller("homeCtrl",homeController); 
homeController.$inject = ["$scope","$window","DonorsUpdate","$timeout"];
function homeController(scp,w,DnrsUpd,tOut) {
   scp.typebloods = ["A Negativo","A Positivo","B Negativo","B Positivo","AB Negativo","AB Positivo","O Negativo","O Positivo"];
   scp.editSuccess=false;
//  Call Authentication
    auth = function(){
        let logado =  w.localStorage.getItem('logado');
        scp.userAuth = JSON.parse(logado);
        if(scp.userAuth === null){
            w.location.href = "/";
        }
    };
//  Call Logout
    scp.logout=function(){
       w.localStorage.removeItem("logado");
    }
//  Call Edit
    scp.edit = function (profile) { 
        if(profile.newpassword!== undefined){
            profile.password=profile.newpassword;
            DnrsUpd.userUdp(profile)
                .then(function(response) {
                if(response.status=="400"){
                    console.error("Problema ao Editar Usuario");
                }else{
                    let data = JSON.stringify(profile);
                    w.localStorage.setItem('logado',data);
                    scp.editSuccess =true;
                    var hidemsg= tOut(function () {
                        scp.editSuccess =false;
                    }, 1500);
                }
              },function(error){
                     console.error(error);
              });    
        }
    }
    //  Verification on start page
    auth();
    scp.userAuth.selected = scp.userAuth.blood; 
};