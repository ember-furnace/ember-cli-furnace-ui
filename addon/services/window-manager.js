import Ember from 'ember';
export default Ember.Service.extend( {
	
	windowContainer : null,
	
	registerContainer : function(container) {
		this.set('windowContainer',container);
		container.ready=function() {
			this.get('windows').forEach(function(window){
				window.show();
			});
		}
		
	},
	
	hasContainer : Ember.computed('windowContainer',{
		get : function() {
			if(this.get('windowContainer')) 
				return true;
			return false;
		}
	}),
	
	windows : null,
	
	init : function() {
		this.windows=Ember.A();
	},
	
	close : function(window) {
		window.hide();
		Ember.run.later(this,function() {
			this.windows.removeObject(window);
		});
	},
		
	open : function(window) {
		if(this.windowContainer) {
			window.show();
		}
		this.windows.pushObject(window);
	}

})