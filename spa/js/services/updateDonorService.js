App.service("DonorsUpdate",["$http",function ($http){
    return {
        userUdp : function (obj) {
            // ARRumaR A URL
            let url="localhost:8000/doador-atualizado";
            return $http({
                method: 'PUT',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {id: obj._id, email:obj.email, password: obj.password,name:obj.name,blood: obj.selected}
            }).then(function (response) {
              return response.data;
            },function (error){
                console.log(error);
            });
        }
    };
}]);