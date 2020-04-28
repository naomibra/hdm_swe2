let kreisArray = new KreisArray();

kreisArray.kreisHinzufuegen(new Kreis(20, 20, 20, "rot"));
kreisArray.kreisHinzufuegen(new Kreis(30, 10, 15, "grün"));
kreisArray.kreisHinzufuegen(new Kreis(15, 10, 12, "rot"));


console.log("Größter Umfang: " + kreisArray.groessterUmfang());
console.log("Kleinste Flaeche: " + kreisArray.kleinsteFlaeche());
console.log("Am weitesten links liegender Kreis: " + kreisArray.amWeitestenLinks().toString());

kreisArray.alleSkalieren();
console.log("Nach Skalierung: größter Umfang: " + kreisArray.groessterUmfang());
console.log("Nach Skalierung: kleinste Flaeche: " + kreisArray.kleinsteFlaeche());

kreisArray.kreisVerschieben(1, -40, 10);
console.log("Nach Verschiebung: Am weitesten links liegender Kreis: " + kreisArray.amWeitestenLinks().toString());

console.log("Kreis mit Farbe grün: " + kreisArray.kreisMitFarbe("grün").toString());


