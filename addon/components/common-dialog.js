import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
	
	classNames : ['common-dialog'],
	
	type : 'ok',
	
	
	
	init : function() {
		this._super();
		if(!this.buttons) {
			switch(this.type) {			
				case 'ok':
					this.buttons={ok : 'ok'};
					break;
				case 'okCancel':
					this.buttons={ok : 'ok',cancel:'cancel'};
					break;
				case 'yesNo':
					this.buttons={yes : 'yes',no:'no'};
					break;
				case 'yesNoCancel':
					this.buttons={yes : 'yes',no:'no',cancel: 'cancel'};
					break;
					
			}
		}
	},
	
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
		return 'common-dialog-content';
	}),

	
});