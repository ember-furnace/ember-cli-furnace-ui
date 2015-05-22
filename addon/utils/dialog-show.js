import lookup from './dialog-lookup-factory';
import Ember from 'ember';
export default function showDialog(dialog,options,container) {
	container=container || this.container;
	options=options || {};
	var service=container.lookup('service:window-manager');	
	
	options.container=container;
	options.service=service;
	options.target=this;
	
	dialog=dialog || this;
	dialog=lookup(dialog,container,options);
	dialog=dialog.create(options);
	if(dialog)
		service.open(dialog);	
	return dialog;
}