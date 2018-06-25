Login.service("loginAPI",["$http",function ($http){
    return {
            AuthUser : function (obj) {
                let url="localhost:8000/doador-validacao";
                return $http({
                    method: 'POST',
                    url: url,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: {email: obj.email, password: obj.passwd}
                }).then(function (response) {
                  return response.data;
                },function (error){
                    console.log(error);
                });
            }
        };
}]);