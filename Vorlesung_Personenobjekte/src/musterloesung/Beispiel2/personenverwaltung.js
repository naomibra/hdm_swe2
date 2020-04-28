let a = [new Person_Zufallsname_Zufallsalter(), new Person_Zufallsname_Zufallsalter(), 
    new Person_Zufallsname_Zufallsalter(), new Person_Zufallsname_Zufallsalter(), new Person_Zufallsname_Zufallsalter()];

for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}


console.log("Älteste Person steht an der Stelle " + aeltestePersonIndex(a) + " und ist: " +  aeltestePerson(a));

for(let i = 0; i < a.length; i++) {
    a[i].alter = a[i].alter + 1;
}

for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}


function aeltestePerson(a) {
    let max = -1;
    let p = null;
    for(let i = 0; i < a.length; i++) {
        if(a[i].alter > max) {
            max = a[i].alter;
            p = a[i];
        }
    }
    return p;
}

function aeltestePersonIndex(a) {
    let maxIndex = 0;
    let p = null;
    for(let i = 0; i < a.length; i++) {
        if(a[i].alter > a[maxIndex].alter) {
            maxIndex = i;
            p = a[i].alter;
        }
    }
    return maxIndex;
}

