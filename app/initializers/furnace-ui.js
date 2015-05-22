import Ember from 'ember';
import showDialog from 'furnace-ui/utils/dialog-show';
import UI from 'furnace-ui';

export function initialize(container, application) {
	var applicationViewFactory = container.lookupFactory('view:application');
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
	
	
	application.register('component:window-container', UI.WindowContainer);
	application.register('service:window-manager', UI.WindowManager);
	
	application.register('dialog:common', UI.CommonDialog);
	
	application.register('ui:dialog-show', showDialog,{instantiate:false});
	
  
	application.inject('route', 'showDialog', 'ui:dialog-show');
	application.inject('component', 'showDialog', 'ui:dialog-show');
	application.inject('controller', 'showDialog', 'ui:dialog-show');
};

export default {
	name: 'furnace-ui',
	initialize: initialize
};
