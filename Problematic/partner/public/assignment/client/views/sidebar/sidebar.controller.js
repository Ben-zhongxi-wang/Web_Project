/**
 * Created by Tianjie Dong on 2015/10/19.
 */

(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);
})();

function SidebarController($scope, $location){
    $scope.isActive = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return true;
        } else {
            return false;
        }
    }
}

