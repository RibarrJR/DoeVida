Login.service("auth",["$window",function ($http){
    return {
         function(){
              let logado =  window.localStorage.getItem('logado');
              let auth = JSON.parse(logado);
              if(auth === null){
                  window.location.href = "localhost:8080/login.html";
              }
            }   
        };
}]);