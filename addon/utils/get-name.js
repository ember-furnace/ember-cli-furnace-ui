import Ember from 'ember';
export default function getName(object) {
	var name='';
	if(typeof object ==='string') {
		name=object;
	}
	else if(object instanceof Ember.Route) {
		name=object.routeName;
	}
	else if(Ember.ControllerMixin.detect(object)) {
		var tmpName = object.constructor.toString();
		var index=tmpName.indexOf(':');
		name=tmpName.substring(index+1,tmpName.indexOf(':',index+1)).replace(/\//g,'.');	
	} else if(object instanceof Ember.Component) {		
		name=object.get('layoutName');
	} else if(object instanceof Ember.Object) {
		name=object.constructor.typeKey;
	} 
	return name;
}