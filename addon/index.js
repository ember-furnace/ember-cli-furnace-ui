/**
 * Provides UI components
 *
 * @module furnace
 * @submodule furnace-ui
 */
import Ember from 'ember';
import ApplicationModal from './components/application-modal';

import Dialog from './components/dialog';

/**
 * @class UI
 * @namespace Furnace
 * @static
 */
export default Ember.Namespace.extend( {	
	
	ApplicationModal : ApplicationModal,
	
	Dialog : Dialog,
	
	dialog : function(options) {
		
	}
	
}).create();
