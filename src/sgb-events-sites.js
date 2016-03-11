'use strict';

angular.module('sgb-events-sites', ['megazord'])
    .controller('sgb-events-sites-controller', ['$scope', '_router', '_screen', '_screenParams','_data','appConstants','lodash',
    	function ($scope, _router, _screen, _screenParams, _data, appConstants, _) {
        _screen.initialize($scope, _screenParams);
        $scope.fullImagePath = appConstants.fullImagePath;
        $scope.data = _data; 
        $scope.filteredItems = $scope.data; 

        $scope.filterItems = function(searchQuery){
            var search = searchQuery.toLowerCase();
            $scope.filteredItems = _.filter($scope.data, function(item){
                return (item.name && item.name.toLowerCase().indexOf(search) != -1) ||
                    (item.link && item.link.toLowerCase().indexOf(search) != -1);
            });
        };

  		$scope.cancelSearch = function(){
            $scope.searchQuery = '';
            $scope.filteredItems = $scope.data;
        };

        $scope.openURL = function(url){
            window.open(url, '_system', 'location=yes'); 
            return false; 
        };

        //Add your controller logic here.
    }]);