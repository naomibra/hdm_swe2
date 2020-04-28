class Person {
	
	constructor() {
		this.name = "noname;";
		this.alter = -1;
	}
	
	toString() {
		return (this.name + " (" + this.alter + ")");
	}

	equals(other) {
		if (this.alter != other.alter)
			return false;
		if (this.name != other.name)
			return false;
		return true;
	}
	
	erhoeheAlter() {
		this.alter = this.alter + 1;
	}
	
}