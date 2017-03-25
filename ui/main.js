//counter  code
var button= document.getElementById('counter')
button.onclick = function(){
//create a requets
var request= new XMLHttpRequest();
//Capture and create a response
request.onreadystatechange = function(){
  if(request.readyState===XMLHttpRequest.DONE){
    if(request.status===200){
      var counter= request.responseText;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
    }
  }
}
// Make request
request.open('GET','http://127.0.0.1:8080/counter', true);
request.send(null);

};

//sumit name
var nameInput =document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit_btn')
submit.onclick = function(){
  // Send the list

var list='';
for (var i = 0; i < names.length; i++) {
  list +='<li>' + names[i]+'</li>';
}

var ul=document.getElementById('namelist');
ul.innerHTML=list;
}
