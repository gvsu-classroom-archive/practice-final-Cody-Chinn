var boxes = document.getElementsByTagName("input");



document.getElementById("submit").addEventListener("click", function(){

    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER - 1;
    var average = 0;

    var total = 0;

    Array.prototype.forEach.call(boxes, function(boxes){
        boxes.style.backgroundColor = "white";    
    });

    Array.prototype.forEach.call(boxes, function(boxes){
        if(parseInt(boxes.value) > max){
            max = parseInt(boxes.value);
        } 
        
        if(parseInt(boxes.value) < min){
            min = parseInt(boxes.value);
        }
        if(boxes.value != ""){
            total += parseInt(boxes.value);
        }
    });
    
    average = total / boxes.length;

    Array.prototype.forEach.call(boxes, function(boxes){
        if(boxes.value == max && boxes.value != ""){
            boxes.style.backgroundColor = "lightgreen";
        }

        if(boxes.value == min && boxes.value != ""){
            boxes.style.backgroundColor = "lightblue";
        }
    });
    
    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("average").innerHTML = average;
});

document.getElementById("more").addEventListener("click", function(){
    for(var i = 0; i <= 9; i++){
        var newField = document.createElement("input");
        newField.setAttribute("type", "text");

        document.getElementById("input-list").appendChild(newField);
    }
});
