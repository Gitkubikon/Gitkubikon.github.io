const firstName = 'Nikita';
const lastName = 'Friesen';
const suffix = 'Founding Engineer · Voice AI · DevOps';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
