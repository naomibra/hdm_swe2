class Person_Zufallsname_Zufallsalter {
	
	constructor() {
		this.alter = getRandomNumber(0, 100);
		this.name = getNextName();
	}
	
	toString() {
		return (this.name + " (" + this.alter + ")");
	}

	equals(other) {
		if (this.alter != other.alter)
			return false;
		if (this.name == null) {
			if (other.name != null)
				return false;
		} else if (this.name != other.name)
			return false;
		return true;
	}
}

