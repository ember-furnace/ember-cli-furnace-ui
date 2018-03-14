import getName from './get-name';
import Ember from 'ember';
export default function lookup(type,object,owner) {
	owner = owner || Ember.getOwner(this);
	var name=getName(object);
	object= owner.factoryFor(type+':'+name).class;
	Ember.assert('furance-ui: Could not resolve dialog '+name,object);
	if(!object.typeKey) {
		object.typeKey=name;
	}
	return object;
}