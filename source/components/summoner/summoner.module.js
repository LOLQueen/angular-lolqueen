import angular from 'angular';
import controller  from './summoner.controller';

export default angular
	.module('components.summoner', [])
	.controller(controller.name, controller);