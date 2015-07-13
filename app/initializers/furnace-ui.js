import Ember from 'ember';
import showDialog from 'furnace-ui/utils/dialog-show';
import handleException from 'furnace-ui/utils/handle-exception';
import UI from 'furnace-ui';

export function initialize(container, application) {
	var applicationViewFactory = container.lookupFactory('view:application');
	if(typeof applicationViewFactory==='function') {
		applicationViewFactory.reopen({
			didInsertElement : function() {
				this._super();
				var service =this.container.lookup('service:window-manager');
				if(!service.get('hasContainer')) {
					var windowContainer = this.container.lookup('component:window-container');
					windowContainer.append();
				}
			}
		});
	} else {
		Ember.warn('furnace-ui: Application view is virtual, cannot inject window-container. Make sure you append it in your template.');
	}
	
	
	application.register('component:window-container', UI.WindowContainer);
	application.register('service:window-manager', UI.WindowManager);
	
	application.register('dialog:common', UI.CommonDialog);
	
	application.register('ui:dialog-show', showDialog,{instantiate:false});
	application.register('ui:handle-exception', handleException,{instantiate:false});
	
  
	application.inject('route', 'handleException', 'ui:handle-exception');
	application.inject('controller', 'handleException', 'ui:handle-exception');
	
	application.inject('route', 'showDialog', 'ui:dialog-show');
	application.inject('component', 'showDialog', 'ui:dialog-show');
	application.inject('controller', 'showDialog', 'ui:dialog-show');
};

export default {
	name: 'furnace-ui',
	initialize: initialize
};
