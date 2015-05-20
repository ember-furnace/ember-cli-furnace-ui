import Ember from 'ember';
import showDialog from 'furnace-ui/utils/dialog-show';

export function initialize(container, application) {
	var applicationViewFactory = container.lookupFactory('view:application');
	applicationViewFactory.reopen({
		didInsertElement : function() {
			this._super();
			if(!this.container.lookup('ui:modal-container')) {
				var applicationModal = this.container.lookup('component:application-modal');
				applicationModal.append();
			}
		}
	});
	
	application.register('ui:dialog-show-modal', showDialog,{instantiate:false});
	
	application.register('ui:modal-dialogs', Ember.A(),{instantiate:false});
	
  
	application.inject('route', 'showModal', 'ui:dialog-show-modal');
	application.inject('component', 'showModal', 'ui:dialog-show-modal');
	application.inject('controller', 'showModal', 'ui:dialog-show-modal');
};

export default {
	name: 'furnace-ui',
	initialize: initialize
};
