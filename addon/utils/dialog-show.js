import lookup from './dialog-lookup-factory';
import Ember from 'ember';
export default function showDialog(dialog,options,owner) {
	owner = owner || Ember.getOwner(this);
	options=options || {};
	var service=owner.lookup('service:window-manager');	
	
	options.service=service;
	options.target=this;
	
	dialog=dialog || this;
	dialog=lookup(dialog,owner,options);
	dialog=dialog.create(options);
	if(dialog) {
		service.open(dialog);
	}
	return dialog;
}