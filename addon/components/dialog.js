import Ember from 'ember';
import Window from './window';

export default Window.extend({
	
	
	classNames : ['dialog'],
	
	width:380,
	
	height:240,
	
	contentLayout : Ember.computed({
		get : function() {
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
		}
	}),
	
	dialogButtons: Ember.computed('buttons',{
		get : function(key,value) {
			var buttons=Ember.A();
			var _buttons=this.get('buttons');
			for(var action in _buttons) {
				buttons.pushObject({
					action: action,
					caption : _buttons[action]
				});
			}
			return buttons;
		}
	}),
});