import Ember from 'ember';
import Window from './window';

export default Window.extend({
	
	
	classNames : ['dialog'],
	
	width:380,
	
	height:240,
	
	contentLayout : Ember.computed( function() {
		var layoutName=null;
		if(!this.get('container')) {
			return null;
		}
		if(this.constructor.typeKey) {
			layoutName=this.constructor.typeKey.replace(/\./g,'/')+'/dialog';
			if(this.get('container').lookup('template:'+layoutName)) {
				return layoutName;
			}
		}
		return 'dialog-content';
	}),
	
	dialogButtons: Ember.computed(function(key,value) {
		var buttons=Ember.A();
		for(var action in this.buttons) {
			buttons.pushObject({
				action: action,
				caption : this.buttons[action]
			});
		}
		return buttons;
	}),
});