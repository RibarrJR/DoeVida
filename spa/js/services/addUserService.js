Login.service("DonorsAdd",["$http",function ($http){
    return {
        userAdd : function (obj) {
            let url="localhost:8000/doador-registrado";
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
                data: {name: obj.name, email:obj.email, blood: obj.blood,password: obj.password}
            }).then(function (response) {
                return response.data;
            },function (error){
                console.log(error);
            });
        }
    };
}]);