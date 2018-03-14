import Ember from 'ember';
export default function handleException(error,retry) {
	switch(error.status) {
		case 401:
			// 	don't show unauthorized errors.
			if(this instanceof Ember.Route) {
				break;
			}
			/* falls through */
		default:
			var message;
			var details;
			if(error.responseJSON) {
				message=error.responseJSON.exception.message;
				if(error.responseJSON.exception.details) {
					details=error.responseJSON.exception.details;
				}
			} else if(error.errorThrown) {
				message=error.errorThrown.message;
			} else if(error.statusText) {
				message=error.statusText;
			} else {
				message=error.message;
			}
			
			var config = Ember.getOwner(this).factoryFor('config:environment').class;
			
			// Do not log an error in test environment, it might cause confusion in
			// the tests results
			// All tests passed will still be marked with a X
			if(config.environment!=='test') {
				/* eslint no-console: "off" */
				console.error(message+(details ? ": "+details : ''));
			}
			this.showDialog('error',{
				error : message,
				details:details,
				retry : retry
			});
			break;
	}
}