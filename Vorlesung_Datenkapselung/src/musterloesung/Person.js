class Person {
	
	constructor(n, a) {
		this._name = n;
		this._alter = a;
	}
	
	get name() {
		return this._name;
	}
	
	get alter() {
		return this._alter;
	}
	
	set alter(a) {
		if (a > this.alter) {
			this._alter = a;
		}
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