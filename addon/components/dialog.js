import Ember from 'ember';

export default Ember.Component.extend({
	tagName : 'dialog',
	
	defaultLayout : 'dialog',
	
	attributeBindings : ['style'],
	
	classNameBindings: ['_typeClass'],
	
	classNames : ['dialog'],
	
	units: 'px',
	
	width:640,
	
	height:480,
	
	actions:  {
		close : function() {
			var dialogs=this.container.lookup('ui:modal-dialogs');
			dialogs.removeObject(this);
		}
	},
		
	_typeClass : Ember.computed(function() {
		return Ember.String.camelize(this.constructor.typeKey);
	}),
	
	contentView : Ember.View.extend({
		tagName : 'dialog-content'
	}),
	
	style : Ember.computed('width,height',function() {
		var width='width:'+this.get('width')+this.get('units')+';';
		var height='height:'+this.get('height')+this.get('units')+';';
		var left='margin-left:-'+(this.get('width')/2)+this.get('units')+';';
		var top='margin-top:-'+(this.get('height')/2)+this.get('units')+';';
		return (width+height+top+left).htmlSafe();
	}),
	
	contentLayout : Ember.computed( function() {
		var layoutName=null;
		if(!this.get('container')) {
			return null;
		}
		if(this.constructor.typeKey) {
			layoutName=this.constructor.typeKey.replace(/\./g,'/')+'/dialog';
			if(this.get('container').lookup('template:'+layoutName)) {
				return layoutName;
			}
		}
		return 'dialog-content';
	}),
	
	layoutName : Ember.computed( function() {
		var layoutName=null;
		if(!this.get('container')) {
			return null;
		}
		if(this.constructor.typeKey) {
			layoutName=this.constructor.typeKey.replace(/\./g,'/')+'/dialog-layout';
			if(this.get('container').lookup('template:'+layoutName)) {
				return layoutName;
			}
		}
		return this.get('defaultLayout');
	})
});