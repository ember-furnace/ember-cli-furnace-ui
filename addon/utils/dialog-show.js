import lookup from './dialog-lookup';
import Ember from 'ember';
export default function showDialog(dialog,container) {
	container=container || this.container;
	dialog=dialog || this;
	dialog=lookup(dialog,container);
	
	var dialogs=container.lookup('ui:modal-dialogs');
	dialogs.pushObject(dialog);
	
}