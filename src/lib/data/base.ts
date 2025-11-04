const firstName = 'Nikita';
const lastName = 'Friesen';
const suffix = 'Product Engineer & Drone Ops Developer';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
