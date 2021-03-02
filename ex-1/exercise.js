// Use this function that is linked to the button to change the background

function set_background() {
    
    docBody = document.getElementsByTagName("body")[0];
    myBodyElements = docBody.getElementsByTagName("p");
    p1 = myBodyElements[0];
    p1.style.background = "red";
  
    p2 = myBodyElements[1];
    p2.style.background = "blue";
    p3 = myBodyElements[2]
    p3.style.background = "grey"
}

