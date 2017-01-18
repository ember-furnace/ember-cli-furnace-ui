import Ember from 'ember';

export default Ember.Component.extend(Ember._ProxyMixin,{
	tagName : 'window-content',
		
	init : function() {
		this._super();
		this.set('target',this.get('_targetObject'));
		this.set('content',this.get('_targetObject.window'));
	}
});