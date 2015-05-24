'use strict';

angular.module('frontend.common').constant('Roles', {
	anon: {
		state : 'public.home',
		level : 0
	},
    admin: {
    	state : 'admin.home',
    	level : 1
    },
    runner: {
    	state : 'runner.home',
    	level : 2
    },
});