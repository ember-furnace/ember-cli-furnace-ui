import getName from './get-name';
import Ember from 'ember';
export default function lookup(type,object,container) {
	container=container || this.container;
	var name=getName(object);
	var object= container.lookupFactory(type+':'+name);
	Ember.assert('furance-ui: Could not resolve dialog '+name,object);
	if(!object.typeKey) {
		object.typeKey=name;
	}
	return object;
}