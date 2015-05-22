import Ember from 'ember';
export default Ember.Component.extend({
	tagName : 'window-container',
	layoutName : 'window-container',
		
//	classNameBindings: ['showClass'],
	
	overlayClass: Ember.computed('windows.length',function() {
		return this.get('windows').findBy('modal',true) ? 'visible' : 'hidden';
	}),
	overlayStyle : Ember.computed('windows',function() {
		return ('z-index:1;').htmlSafe();
	}),
	
	windows: null,
	
	width:Ember.computed.alias('_width').readOnly(),

	height:Ember.computed.alias('_height').readOnly(),
	
	_width: 0,
	
	_height: 0,
	
	_service: null,
	
	init: function() {
//		var application=this.container.lookup('application:main');		
//		application.register('ui:window-container', this,{ instantiate: false });		
		this._service=this.container.lookup('service:window-manager');
		this._service.registerContainer(this);
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