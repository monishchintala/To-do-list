// for to add close function to list item and function to hide the list if user want to delete

var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// function to add check class when user finishes the task

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//buliding a new "to-do" note when ever the user clicks the add symbol

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myText").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue.length>0) {
        document.getElementById("list").appendChild(li);
    }
    
    document.getElementById("myText").value = "";
  
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
