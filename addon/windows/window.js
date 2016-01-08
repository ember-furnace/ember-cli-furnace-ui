import Ember from 'ember';

export default Ember.Object.extend(Ember.ActionHandler,{
	
	decorator : null,
	
	units: 'px',
	
	visible: false,
		
	width:640,
	
	height:480,
	
	left:null,
	
	top: null,
	
	position : 'centered',
	
	service : Ember.inject.service('window-manager'),
	
	modal : false,
	
	actions:  {
		close : function() {
			this.service.close(this);
		}
	},
		
	_typeClass : Ember.computed({
		get : function() {
			return Ember.String.camelize(this.constructor.typeKey);
		}
	}),
	
	init : function() {
		this._super();
		
	},
	
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
		}
	}),

	defaultLayout : 'window',
	
	contentDecorator: 'window-content-decorator',
	
	contentLayout : Ember.computed({
		get : function() {
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
		}
	}),
	
	layoutName : Ember.computed({
		get : function() {
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
		}
	}),
	
	close: function() {
		this.service.close(this);
	},
	
	show : function() {		
		this.set('visible',true);
	},
	
	decoratorObserver: Ember.observer('decorator',function() {
		if(this.visible && this.decorator)
			this.decorator.center(this.get('left')===null, this.get('top')===null);
	}),

	hide: function() {
		this.set('visible',false);
	},
	
});