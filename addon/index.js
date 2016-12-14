/**
 * Provides UI components
 *
 * @module furnace
 * @submodule furnace-ui
 */
import Ember from 'ember';
import WindowContainer from './components/window-container';
import WindowDecorator from './components/window-decorator';
import WindowContentDecorator from './components/window-content-decorator';
import WindowManager from './services/window-manager';

import Window from './windows/window';
import Dialog from './windows/dialog';
import ModalDialog from './windows/modal-dialog';
import CommonDialog from './windows/common-dialog';
import ErrorDialog from './dialogs/error';

/**
 * @class UI
 * @namespace Furnace
 * @static
 */
export default Ember.Namespace.extend( {	
	
	WindowContainer : WindowContainer,

	WindowDecorator : WindowDecorator,

	WindowContentDecorator : WindowContentDecorator,
	
	WindowManager : WindowManager,
	
	Window : Window,
	
	Dialog : Dialog,

	ModalDialog : ModalDialog,
	
	CommonDialog : CommonDialog,
	
	ErrorDialog : ErrorDialog,
	
	dialog : function(options) {
		
	}
	
}).create();
