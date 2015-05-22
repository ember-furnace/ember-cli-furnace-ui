/**
 * Provides UI components
 *
 * @module furnace
 * @submodule furnace-ui
 */
import Ember from 'ember';
import WindowContainer from './components/window-container';
import WindowManager from './services/window-manager';

import Window from './components/window';
import Dialog from './components/dialog';
import ModalDialog from './components/modal-dialog';
import CommonDialog from './components/common-dialog';

/**
 * @class UI
 * @namespace Furnace
 * @static
 */
export default Ember.Namespace.extend( {	
	
	WindowContainer : WindowContainer,
	
	WindowManager : WindowManager,
	
	Window : Window,
	
	Dialog : Dialog,

	ModalDialog : ModalDialog,
	
	CommonDialog : CommonDialog,
	
	dialog : function(options) {
		
	}
	
}).create();
