import Ember from 'ember';
import Window from './window';

export default Ember.Component.extend({
	tagName : 'window',
	
	defaultLayout : 'window',
	
	attributeBindings : ['style'],
	
	classNameBindings: ['_typeClass','_visible','position'],
	
	classNames : [],
	
	units: 'px',
	
	visible: false,
		
	width:640,
	
	height:480,
	
	left:null,
	
	top: null,
	
	position : '',
	
	service : null,
	
	modal : false,
	
	actions:  {
		close : function() {
			this.service.close(this);
		}
	},
		
	_typeClass : Ember.computed(function() {
		return Ember.String.camelize(this.constructor.typeKey);
	}),
	
	contentView : Ember.View.extend({
		tagName : 'window-content'
	}),
	
	init : function() {
		this._super();
		
	},
	
	_visible : Ember.computed('visible',function() {
		if(this.get('visible')) 
			return 'visible';
		return 'hidden';
	}),
	
	style : Ember.computed('width,height,left,top',function() {
		var width,height,left,top,zIndex,visible,units=this.get('units')+';';
		if(this.position==='centered'){			
			left='margin-left:-'+(this.get('width')/2)+units;
			top='margin-top:-'+(this.get('height')/2)+units;
		}
		else {			
			left='left:'+this.get('left')+units;
			top='top:'+this.get('top')+units;			
		}
		width='width:'+this.get('width')+units;
		height='height:'+this.get('height')+units;
		zIndex='z-index:1;';		
		return (width+height+top+left+zIndex).htmlSafe();
	}),
	
	contentLayout : Ember.computed( function() {
		var layoutName=null;
		if(!this.get('container')) {
			return null;
		}
		if(this.constructor.typeKey) {
			layoutName=this.constructor.typeKey.replace(/\./g,'/')+'/window';
			if(this.get('container').lookup('template:'+layoutName)) {
				return layoutName;
			}
		}
		return 'window-content';
	}),
	
	layoutName : Ember.computed( function() {
		var layoutName=null;
		if(!this.get('container')) {
			return null;
		}
		if(this.constructor.typeKey) {
			layoutName=this.constructor.typeKey.replace(/\./g,'/')+'/window-layout';
			if(this.get('container').lookup('template:'+layoutName)) {
				return layoutName;
			}
		}
		return this.get('defaultLayout');
	}),
	
	close: function() {
		this.service.close(this);
	},
	
	show : function() {
		if(this.get('left')===null)
			this.set('left',this.get('targetObject.width')/2-this.get('width')/2);
		if(this.get('top')===null)
			this.set('top',this.get('targetObject.height')/2-this.get('height')/2);
		this.set('visible',true);
	},

	hide: function() {
		this.set('visible',false);
	},
	
	ready : function() {		
	},
	
	didInsertElement : function() {
		this.ready();
	}
});