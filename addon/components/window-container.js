import Ember from 'ember';
export default Ember.Component.extend({
	tagName : 'window-container',
	layoutName : 'window-container',
		
//	classNameBindings: ['showClass'],
	
	overlayClass: 'hidden',
	
	overlayStyle: ('z-index:1;').htmlSafe(),
	
	
	windowOverlayObserver: Ember.observer('windows.@each.visible,window.@each.modal',function(){
		
		this.set('overlayStyle',('z-index:1;').htmlSafe());		
		if(this.get('windows').findBy('modal',true)) {
			this.set('overlayClass','visible');
		} else{
			this.set('overlayClass','hidden');
		}
	}),
	 
	
	windows: Ember.computed.alias('service.windows'),
	
	width:Ember.computed.alias('_width').readOnly(),

	height:Ember.computed.alias('_height').readOnly(),
	
	_width: 0,
	
	_height: 0,
	
	service: Ember.inject.service('window-manager'),
	
	init: function() {
//		var application=this.container.lookup('application:main');		
//		application.register('ui:window-container', this,{ instantiate: false });		
//		this._service=this.container.lookup('service:window-manager');
		this.get('service').registerContainer(this);
//		this.set('windows',this.container.lookup('ui:windows'));
		this._super();
	},
	
	_updateSize : function() {
		this.set('_width', this.element.parentNode.offsetWidth);
		this.set('_height',this.element.parentNode.offsetHeight);
	},
	
	_resizeHandler : function(event) {
		event.data._updateSize();
	},
	
	ready : function () {
		
	},
	
	didInsertElement : function() {
		this._updateSize();
		this.$(window).on('resize',this,this._resizeHandler);
		this._super();
		this.ready();
	},
	
	destroy: function() {
		this.$(window).off('resize',this._resizeHandler)
	}
	
	
})