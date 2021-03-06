import Ember from 'ember';
import showDialog from 'furnace-ui/utils/dialog-show';
import handleException from 'furnace-ui/utils/handle-exception';
import UI from 'furnace-ui';

export function initialize(application) {
	application.register('component:window-container', UI.WindowContainer);
	application.register('component:window-decorator', UI.WindowDecorator);
	application.register('component:window-content-decorator', UI.WindowContentDecorator);
	application.register('service:window-manager', UI.WindowManager);
	
	application.register('dialog:common', UI.CommonDialog);
	
	application.register('ui:dialog-show', showDialog,{instantiate:false});
	application.register('ui:handle-exception', handleException,{instantiate:false});
	
  
	application.inject('route', 'handleException', 'ui:handle-exception');
	application.inject('controller', 'handleException', 'ui:handle-exception');
	application.inject('service', 'handleException', 'ui:handle-exception');
	application.inject('control', 'handleException', 'ui:handle-exception');
	application.inject('form', 'handleException', 'ui:handle-exception');
	
	application.inject('route', 'showDialog', 'ui:dialog-show');
	application.inject('component', 'showDialog', 'ui:dialog-show');
	application.inject('controller', 'showDialog', 'ui:dialog-show');
	application.inject('service', 'showDialog', 'ui:dialog-show');
	application.inject('control', 'showDialog', 'ui:dialog-show');
	application.inject('form', 'showDialog', 'ui:dialog-show');
	application.inject('panel', 'showDialog', 'ui:dialog-show');
	application.inject('input', 'showDialog', 'ui:dialog-show');
};

export default {
	name: 'furnace-ui',
	initialize: initialize
};
