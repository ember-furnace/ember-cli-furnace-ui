import Ember from 'ember';
export default Ember.Service.extend( {
	
	windowContainer : null,
	
	registerContainer : function(container) {
		this.set('windowContainer',container);
		container.set('windows',this.windows);
		container.ready=function() {
			this.windows.forEach(function(window){
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
		window.set('service',this);
		if(this.windowContainer) {
			window.ready=function() {
				this.show();
			}
		}
		this.windows.pushObject(window);
	}

})