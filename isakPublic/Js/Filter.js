/*eslint no-undef: "error"*/
/*eslint-env node*/
function appendData(data){
var mainContainer = document.getElementById("myData");

for (var i = 0; i < data.length; i++){
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].name;
    mainContainer.appendChild(div);
    }
}
filterSelection("all"); // Viser alle konsulenter når siden bliver loadet.
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv"); // x bliver sat til filterdiv som er id'et på alle konsulenter.
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
window.onload = function(){
    const form = document.getElementById('profileform');
    const name = document.getElementById('profilename');

    fetch('/users').then(response => response.json()).then(json=> {
        debugger;
});
};
fetch('/users').then(function(response){
})
    .catch(function(err){

    });
fetch('/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    appendData(data);
})
.catch(function(err){
    console.log(err);
});
// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}