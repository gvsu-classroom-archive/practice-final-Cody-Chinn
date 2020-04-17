// PROBLEM 1
document.getElementById("decorate").addEventListener("click", function() {
    var arr = document.getElementsByClassName("allcaps");

    Array.prototype.forEach.call(arr, function(arr){
        arr.innerHTML = arr.innerHTML.toUpperCase();
    });

    var upperArr = document.getElementsByClassName("upcase");
    Array.prototype.forEach.call(upperArr, function(upperArr){
        var altered = upperArr.innerHTML;

        var words = altered.split(" ");
        var x = "";

        words.forEach(word => {
            var c = word.charAt(0);
            c = c.toUpperCase();

            var subs = word.substr(1);

            var newWord = c + subs;

            word = newWord;

            x = x + " " + newWord;
        });

        upperArr.innerHTML = x;
    });
});