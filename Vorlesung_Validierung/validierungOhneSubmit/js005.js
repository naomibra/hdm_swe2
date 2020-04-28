function maxLaenge(text, laenge) {
   if (text != '' && text.length > laenge) {
      return false;
   }
   return true;
}


function checkText(textFeld) {
    var res = true;
    var text = textFeld.value;
    if (!maxLaenge(text, 200)) {
       textFeld.style.background = "red";
       res = false;
    } else {
       textFeld.style.background = "white";
       res = true;
    }
    return res;
  }
