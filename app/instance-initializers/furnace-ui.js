import Ember from 'ember';
import showDialog from 'furnace-ui/utils/dialog-show';
import handleException from 'furnace-ui/utils/handle-exception';
import UI from 'furnace-ui';
export function initialize(instance) {	
	var applicationViewFactory = instance._lookupFactory('view:application');
	if(typeof applicationViewFactory==='function') {
		applicationViewFactory.reopen({
			didInsertElement : function() {
				this._super();
				var service =Ember.getOwner(this).lookup('service:window-manager');
				if(!service.get('hasContainer')) {
					var windowContainer = Ember.getOwner(this).lookup('component:window-container');
					windowContainer.append();
				}
			}
		});
	} else {
		Ember.warn('furnace-ui: Application view is virtual, cannot inject window-container. Make sure you append it in your template.');
	}	
};

export default {
	name: 'furnace-ui',
	initialize: initialize
};
