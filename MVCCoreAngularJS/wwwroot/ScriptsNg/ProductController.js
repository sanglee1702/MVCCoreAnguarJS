var myApp = angular.module('myFormApp', []);

myApp.controller('ProductController', function ($scope, $http, $location, $window) {
    $scope.proModel = {};
    $scope.message = '';
    $scope.result = "color-default";
    $scope.ListProduct = null;
    $scope.isViewLoading = false;
    getallProduct();

    //******=========Get Last ID Product=========******

    function getLastID() {
        return Math.max.apply(Math, $scope.ListProduct.map(function (item) {
            return item.id + 1;
        }));
    }

    //******=========Get All Product=========******

    function getallProduct() {
        $http.get('/api/Product')
            .success(function (data) {
                $scope.ListProduct = data;
            })
            .error(function () {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
            });
    }

    //******=========Get Single Product=========******

    $scope.getProduct = function (proModel) {
        $http.get('/api/Product/' + proModel.id)
            .success(function (data) {
                $scope.proModel = data;
            })
            .error(function () {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
            });
    };

    //******=========Save Product=========******
    $scope.saveProduct = function () {
        $scope.isViewLoading = true;
        var id = getLastID();

        $http({
            method: 'POST',
            url: '/api/Product',
            data: JSON.stringify({
                id: id,
                name: $scope.proModel.name,
                price: $scope.proModel.price
            })
        }).success(function () {
            $scope.message = 'Form data Saved!';
            $scope.result = "color-green";
            getallProduct();
            $scope.proModel = {};
        }).error(function () {
            $scope.message = 'Form data not Saved!';
            $scope.result = "color-red";
        });

        $scope.isViewLoading = false;
    };

    //******=========Update Product=========******

    $scope.updateProduct = function () {
        if ($scope.proModel.id === undefined) {
            $scope.message = 'You not choose item!';
            $scope.result = "color-red";
        }
        else {
            $http({
                method: 'PUT',
                url: '/api/Product/' + $scope.proModel.id,
                data: $scope.proModel
            }).success(function () {
                $scope.message = 'Form data Updated!';
                $scope.result = "color-green";
                getallProduct();
                $scope.proModel = {};
            }).error(function () {
                $scope.message = 'Form data not Updated!';
                $scope.result = "color-red";
            });
        }
    };

    //******=========Delete Product=========******

    $scope.deleteProduct = function (proModel) {

        var IsConf = confirm('You are about to delete ' + proModel.name + '. Are you sure?');

        if (IsConf) {
            $http.delete('/api/Product/' + proModel.id)
                .success(function () {
                    getallProduct();
                    $scope.message = proModel.name + ' deleted from record!!';
                    $scope.result = "color-green";
                })
                .error(function () {
                    $scope.message = 'Error on deleting Record!';
                    $scope.result = "color-red";
                });
        }

    };


});

myApp.controller('UserController', function ($scope, $http, $location, $window) {
    $scope.userModel = {};
    $scope.message = '';
    $scope.result = "color-default";
    $scope.ListUser = null;
    $scope.isViewLoading = false;
    getAllUser();

    //******=========Get Last ID User=========******

    function getLastID() {
        return Math.max.apply(Math, $scope.ListUser.map(function (item) {
            return item.id + 1;
        }));
    }

    //******=========Get All User=========******
    function getAllUser() {
        $http.get('/api/User')
            .success(function (data) {
                $scope.ListUser = data;
            })
            .error(function () {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
            });
    }

    //******=========Get Single User=========******
    $scope.getUser = function (userModel) {
        $http.get('/api/User/' + userModel.id)
            .success(function (data) {
                $scope.userModel = data;
            })
            .error(function () {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
            });
    };

    $scope.saveUser = function () {
        $scope.isViewLoading = true;
        var id = getLastID();

        $http({
            method: 'POST',
            url: '/api/User',
            data: JSON.stringify({
                id: id,
                email: $scope.userModel.email,
                password: $scope.userModel.password
            })
        }).success(function () {
            $scope.message = 'Form data Saved!';
            $scope.result = "color-green";
            getAllUser();
            $scope.userModel = {};
        }).error(function () {
            $scope.message = 'Form data not Saved!';
            $scope.result = "color-red";
            });

        $scope.isViewLoading = false;
    };

    //******=========Update Product=========******

    $scope.updateUser = function () {
        if ($scope.userModel.id === undefined) {
            $scope.message = 'You not choose item!';
            $scope.result = "color-red";
        }
        else {
            $http({
                method: 'PUT',
                url: '/api/User/' + $scope.userModel.id,
                data: $scope.userModel
            }).success(function () {
                $scope.message = 'Form data Updated!';
                $scope.result = "color-green";
                getAllUser();
                $scope.userModel = {};
            }).error(function () {
                $scope.message = 'Form data not Updated!';
                $scope.result = "color-red";
            });
        }
    };

    //******=========Delete Product=========******

    $scope.deleteUser = function (userModel) {

        var IsConf = confirm('You are about to delete ' + userModel.name + '. Are you sure?');

        if (IsConf) {
            $http.delete('/api/User/' + userModel.id)
                .success(function () {
                    getAllUser();
                    $scope.message = userModel.name + ' deleted from record!!';
                    $scope.result = "color-green";
                })
                .error(function () {
                    $scope.message = 'Error on deleting Record!';
                    $scope.result = "color-red";
                });
        }

    };

});