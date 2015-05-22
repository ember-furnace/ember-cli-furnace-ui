import getName from './get-name';
export default function lookup(type,object,container) {
	container=container || this.container;
	var name=getName(object);
	var object= container.lookup(type+':'+name);
	if(!object.constructor.typeKey) {
		object.constructor.typeKey=name;
	}
	return object;
}