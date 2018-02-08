
console.log("Loaded dom.js");

//Search 
var title = document.querySelector('#title');

//title['innerText'] = 'The current time is ' + new Date()
title.innerText = 'The current time is ' + new Date();

var text = ['ONE', 'TWO', 'THREE'];

for (var i = 0; i <text.length; i += 1) {

    var li = document.querySelector('#item' + (i + 5));
    //li['innerText'] = text[i];
}

for (var i = 0; i <text.length; i += 1) {

    var li = document.querySelector('#item' + (i + 5));
    li.innerText = text[i];
    document.querySelector('#mylist').appendChild(li);
}

