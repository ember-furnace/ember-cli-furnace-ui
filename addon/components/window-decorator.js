import Ember from 'ember';

export default Ember.Component.extend({
	window : null,

	tagName : 'window',
	
	
	attributeBindings : ['style'],
	
	classNameBindings: ['_typeClass','_visible','position'],
	
	classNames : [],
	
	units: Ember.computed.alias('window.units'),
	
	visible: Ember.computed.alias('window.visible'),
		
	width: Ember.computed.alias('window.width'),
	
	height:Ember.computed.alias('window.height'),
	
	left:Ember.computed.alias('window.left'),
	
	top: Ember.computed.alias('window.top'),
	
	position : Ember.computed.alias('window.position'),
	
	
	modal : Ember.computed.alias('window.modal'),
	
	init : function() {
		this._super();
		this.set('target',this.window);
		this.set('window.decorator',this);
	},
	
	_typeClass : Ember.computed({
		get : function() {
			return Ember.String.camelize(this.window.constructor.typeKey);
		}
	}),
	
	_visible : Ember.computed('visible',{
		get : function() {
			if(this.get('visible')) 
				return 'visible';
			return 'hidden';
		}
	}),
	
	style : Ember.computed('width,height,left,top',{
		get : function() {
			var width,height,left,top,zIndex,visible,units=this.get('units')+';';
			if(this.get('position')==='centered'){			
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
		}
	}),
	
	contentDecorator : Ember.computed.alias('window.contentDecorator'),
	
	contentLayout : Ember.computed.alias('window.contentLayout'),
	
	layoutName : Ember.computed.alias('window.layoutName'),
	
	center : function(x,y) {
		if(x || x===undefined)
			this.set('left',this.get('targetObject.width')/2-this.get('width')/2);
		if(y || y===undefined)
			this.set('top',this.get('targetObject.height')/2-this.get('height')/2);
	},
	
	destroy : function() {
		this._super();
		if(this.window) {
			this.set('window.decorator',null);
		}
	},
	
});