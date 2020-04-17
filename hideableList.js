var classList = document.querySelectorAll(".hideableList");

Array.prototype.forEach.call(classList, function(classList){
    classList.addEventListener("click", function(){
        console.log("click");
        var chilly = classList.children;
        Array.prototype.forEach.call(chilly, function(chilly){
            if(chilly.className == "hl-header"){
                if(chilly.nextSibling.className == "arrow-down"){
                chilly.nextSibling.className = "arrow-right";
                } else {
                    chilly.nextSibling.className = "arrow-down";
                }
            }

            if(chilly.tagName == "UL"){
                if(chilly.style.display == "none"){
                    chilly.style.display = "inline-block";
                } else {
                    chilly.style.display = "none";
                }
            }
        })
    });
});