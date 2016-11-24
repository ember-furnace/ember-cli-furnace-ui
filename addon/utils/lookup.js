import Ember from 'ember';
import getName from './get-name';
export default function lookup(type,object,owner) {
	owner = owner || Ember.getOwner(this);
	var name=getName(object);
	var object= owner.lookup(type+':'+name);
	if(!object.constructor.typeKey) {
		object.constructor.typeKey=name;
	}
	return object;
}