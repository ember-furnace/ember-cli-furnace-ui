import UI from 'furnace-ui';
import Ember from 'ember';
export default UI.ModalDialog.extend({
	title : 'error.title',
	
	text  : 'error.text',
	
	error : '',
	
	actions : {
		retry : function() {
			if(this.retry) {
				this.retry();
			}
			this.close();
		},
		
		back : function() {
			this.close();
			window.history.back();
		}
	},
				
	init : function() {
		this._super();
		this.buttons={};
		if(this.retry) {
			this.buttons.retry='error.retry';			
		}
		if(this.get('target') instanceof Ember.Route) {
			this.buttons.back='error.back';
		} else {
			this.buttons.close='error.close';
		}
	}
});