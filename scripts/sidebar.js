/**
 * Highlights element according to pageYOffset (number of pixels the document is currently scrolled along the vertical axis)
 * @param {String} id parameter deciding what element in sidebar to highlight 
 */
function highlightText (id) {
    if (document.getElementById("sidebar-list") != null){
        elementList = document.getElementById("sidebar-list").childNodes;
        for (let i = 1; i < elementList.length; i+=2 ){
            if (elementList[i].id === id){
                elementList[i].style.color = '#d42c1a';
            } else {
                elementList[i].style.color = '#d8d1c9';
            }
        }
    }
}

