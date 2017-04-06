


var modal = document.getElementById('modal')
document.getSelectorAll('bibim').forEach(
  function(obj){
    modal.style.display = "block";
  }
);

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

var cartNumber = 0;
var cart = document.querySelector('#cart');


document.querySelectorAll("button").forEach(
  function(obj){
    console.log('hello');
    obj.addEventListener('click',
      function(){
        cartNumber++;
        cart.innerHTML = "Cart (" + cartNumber + ")";
      }
    )
  }
);


var arr = [];

var food = ["Pics/bibimbap.jpg", "Pics/bibimbap.jpg", "Pics/bibimbap.jpg", "Pics/bibimbap.jpg"];

for (var i = 0; i < 4; i++){
  var menu = document.createElement('div');

  var title = document.createElement('div');
  title.classname="title";

  var para = document.createElement("p");
  var text = document.createTextNode("Bibimbap");
  para.appendChild(text);
  title.appendChild(para);

  document.body.appendChild(title);

  var div = document.createElement('div');
  div.className="item";

  var img = document.createElement('img');
  img.src = food[i];

  // document.getElementsByClassName("item")[i].appendChild(img);
  document.body.appendChild(div);


}


console.log(arr);
