import Ember from 'ember';

export default Ember.Component.extend(Ember._ProxyMixin,{
	tagName : 'window-content',
		
	init : function() {
		this._super();
		this.set('target',this.get('_targetObject'));
		this.set('content',this.get('_targetObject.window'));
	},
	
	didInsertElement: Ember.on('didInsertElement',function() {
		this.get('content').trigger('didInsertContent',this);
	}),
	
	didRender: Ember.on('didRender',function() {
		this.get('content').trigger('didRenderContent',this);
	}),
});