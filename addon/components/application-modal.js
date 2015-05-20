import Ember from 'ember';
export default Ember.Component.extend({
	tagName : 'modal-container',
	layoutName : 'modal-container',
		
	classNameBindings: ['showClass'],
	
	showClass: Ember.computed('dialogs.length',function() {
		return this.get('dialogs.length') ? 'show' : null;
	}),
	
	dialogs: null,
	
	init: function() {
		var application=this.container.lookup('application:main');		
		application.register('ui:modal-container', this,{ instantiate: false });		
		this.set('dialogs',this.container.lookup('ui:modal-dialogs'));
		this._super();
	}
})