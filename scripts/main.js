<<<<<<< HEAD
/*
const CTAELEMNT = document.querySelector(".box");

if (CTAELEMNT.hasAttribute(".click2")){
console.log(CTAELEMNT.hasAttribute(".click2"));
}else {
CTAELEMNT.setAttribute("target","box");
}


console.log(CTAELEMNT.attributes);


const FIGURED = document.querySelector("box");
const THEIMAGE = FIGURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("speed");

var captionText = document.createTextNode(altText);

captionElement.append(altText);
FIGURED.append(captionElement);
THEIMAGE.setAttribute("alt" , "");
*/
/*
onClick = function alert(lat1, lon1, lat2, lon2, unit ){
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist;
  }
}
*/
=======

>>>>>>> 86713ddee81d73079d4f723a0c9e6e4715c17ad2
console.log(alert)

function firstFunction(){
  var value = document.getElementById("text").value;
  alert(value);
}

var i = 0;
var button = document.getElementById('click2');
button.onclick = function move(){
  if (i == 0){
    i = 1;
    var element =
    document.getElementById("thebar");
    var width = 1;
    var thebar = setInterval(frame, 20);

    function frame(){
      if (width >= 70){
        clearInterval(thebar);
        i = 0;
      }else {
        width++;
        element.style.width = width + "%";
      }
    }
  }
}

 function items(){
<<<<<<< HEAD
  var stuff = ["coffe" , "milk" , "medicine" , "water"];
=======
  var stuff = ["coffee" , " milk" , " medicine" , " water"];
>>>>>>> 86713ddee81d73079d4f723a0c9e6e4715c17ad2
  var display = stuff.toString();
 document.getElementById("things").innerHTML = display;

}
<<<<<<< HEAD


/*

  var num = {1 , 5 , 10 , 15 , 20 , 30 , 40 , 50, 60 , 70}
function firstFunction(){
numb.push("1 , 5 , 10 , 15 , 20 , 30 , 40 , 50, 60 , 70");
document.getElementById("push").innerHTML = fruits;
}
*/
=======
>>>>>>> 86713ddee81d73079d4f723a0c9e6e4715c17ad2
