class FarbManagement {
	
	constructor(i) {
		this.farben = new Array();
		for (let index = 0; index < i; index++) {
			this.farben[index] = new Farbe(index);
		}
	}
	
	bestimmeFarbe(element, i) {
		if( i >= this.farben.length) {
			i = i % this.farben.length;
		}
		if(element.tagName == "H2")
			return this.farben[i].farbeH2;
		else {
			if(element.tagName == "H3")
				return this.farben[i].farbeH3;
			else {
				if(element.tagName == "P")
					return this.farben[i].farbeP;
			}
		}
	}

}