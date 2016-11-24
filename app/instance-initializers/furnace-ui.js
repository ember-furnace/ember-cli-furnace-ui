import Ember from 'ember';
import showDialog from 'furnace-ui/utils/dialog-show';
import handleException from 'furnace-ui/utils/handle-exception';
import UI from 'furnace-ui';
export function initialize(instance) {	
	var applicationViewFactory = instance._lookupFactory('view:toplevel');
	
	if(typeof applicationViewFactory==='function') {
		applicationViewFactory.reopen({
			tagName:'application',
			didInsertElement : function() {
				this._super();
				var service =Ember.getOwner(this).lookup('service:window-manager');
				if(!service.get('hasContainer')) {
					Ember.warn('furnace-ui: You forgot to add the window-container to your template.');
				}
			}
		});
	} else {
		Ember.warn('furnace-ui: Cannot inject to toplevel view. Make sure you append window-container in your template.');
	}	
};

export default {
	name: 'furnace-ui',
	initialize: initialize
};
