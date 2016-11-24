import ModalDialog from './modal-dialog';
import Ember from 'ember';
export default ModalDialog.extend({
	
	classNames : ['common-dialog'],
	
	actions : {
		click : function(action) {
			this.close();
			if(this[action]!==true)
				this.get('target').send(this[action],this);
		}
		
	},
	
	init : function() {
		this._super();
	},
	
	text : '',
	
	textAttributes : [],
	
	yes : null,
	
	no : null,
	
	ok : null,
	
	cancel : null,
	
	buttons : Ember.computed('yes,no,ok,cancel,close',{
		get : function() {
			var buttons={};
			if(this.yes) 
				buttons.yes='yes';
			if(this.no) 
				buttons.no='no';
			if(this.ok) 
				buttons.ok='ok';
			if(this.cancel) 
				buttons.cancel='cancel';
			return buttons;
		}
	}),
	
	contentLayout : Ember.computed({
		get : function() {
			var layoutName=null;
			if(!Ember.getOwner(this)) {
				return null;
			}
			if(this.constructor.typeKey) {
				layoutName=this.constructor.typeKey.replace(/\./g,'/')+'/dialog';
				if(Ember.getOwner(this).lookup('template:'+layoutName)) {
					return layoutName;
				}
			}
			return 'common-dialog-content';
		}
	}),

	
});