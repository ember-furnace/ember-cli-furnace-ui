import Ember from 'ember';
export default function lookupDialog(dialog,container) {
	container=container || this.container;
	var dialogName='';
	if(typeof dialog ==='string') {
		dialogName=dialog;
	}
	else if(dialog instanceof Ember.Route) {
		dialogName=object.routeName;
	}
	else if(Ember.ControllerMixin.detect(object)) {
		var tmpName = object.constructor.toString();
		var index=tmpName.indexOf(':');
		dialogName=tmpName.substring(index+1,tmpName.indexOf(':',index+1)).replace(/\//g,'.');	
	} else if(object instanceof Ember.Component) {		
		dialogName=object.get('layoutName');
	} else if(object instanceof Ember.Object) {
		dialogName=object.constructor.typeKey;
	} 
	var dialog= container.lookup('dialog:'+dialogName);
	if(!dialog.constructor.typeKey) {
		dialog.constructor.typeKey=dialogName;
	}
	return dialog;
}