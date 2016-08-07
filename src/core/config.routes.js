import angular from 'angular';

export default angular.module('routes', ['ui-router'])
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state('home', {
			// Needs boilerplate for ui state. Something needs ui-view directive attached.
		})
	}])
	.name;