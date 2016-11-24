import getName from './get-name';
import Ember from 'ember';
export default function lookup(type,object,owner) {
	owner = owner || getOwner(this);
	var name=getName(object);
	var object= owner._lookupFactory(type+':'+name);
	Ember.assert('furance-ui: Could not resolve dialog '+name,object);
	if(!object.typeKey) {
		object.typeKey=name;
	}
	return object;
}