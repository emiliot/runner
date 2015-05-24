'use strict';

angular.module('frontend')
.factory('AuthService', ["$http", "LocalService", "Roles", "CurrentUser","APIUrl", 
	function($http, LocalService, Roles, User, CurrentUser, APIUrl) {
	return {
		authorize: function(access) {
			if (access === Roles.runner.level) {
				return this.isAuthenticated();
			}else if (access === Roles.admin.level){
				return this.isAdmin();
			} else {
				return true;
			}
		},
		isAuthenticated: function() {
			return LocalService.get('auth_token');
		},
		isAdmin: function() {
			if(LocalService.get('auth_token')){
				var user = CurrentUser.user();
				return user.role === 'admin';
			}
			return false;
		},
		login: function(credentials) {
			var login = $http.post(APIUrl.v1 + '/auth', credentials);
			login.success(function(result) {
				LocalService.set('auth_token', JSON.stringify(result));
			});
			return login;
		},
		logout: function() {
	        // The backend doesn't care about logouts, delete the token and you're good to go.
	       	LocalService.unset('auth_token');
	    }
    }
}]).factory('AuthInterceptor', ["$q", "$injector", function($q, $injector) {
	var LocalService = $injector.get('LocalService');

	return {
		request: function(config) {
			var token;
			if (LocalService.get('auth_token')) {
				token = angular.fromJson(LocalService.get('auth_token')).token;
			}
			if (token) {
				config.headers.Authorization = 'Bearer ' + token;
			}
			return config;
		},
		responseError: function(response) {
			if (response.status === 401 || response.status === 403) {
				LocalService.unset('auth_token');
				$injector.get('$state').go('public.login');
			}
			return $q.reject(response);
		}
	}
}]).config(["$httpProvider", function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
}]);