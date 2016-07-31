import angular from 'angular';
import { default as Core } from './core/core.module';

export default lameApp = angular.module('lameApp', [])
	.directive('lameDirective', () => {
		return {
			template: '<p>This is one LAME directive.</p>',
			restrict: 'E'
		};
	})
	.name;
