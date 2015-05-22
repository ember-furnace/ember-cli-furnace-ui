import getName from './get-name';
export default function lookup(type,object,container) {
	container=container || this.container;
	var name=getName(object);
	var object= container.lookupFactory(type+':'+name);
	if(!object.typeKey) {
		object.typeKey=name;
	}
	return object;
}