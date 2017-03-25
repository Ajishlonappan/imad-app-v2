//counter  code
var button= document.getElementById('counter')
button.onclick = function()
{
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
request.open('GET','http://ajishlonappan.imad.hasura-app.io/counter', true);
request.send(null);

};

//sumit name

var submit=document.getElementById('submit_btn')
submit.onclick = function()
{
  // Send the list
  var request= new XMLHttpRequest();
  //Capture and create a response
  request.onreadystatechange = function()
  {
    if(request.readyState===XMLHttpRequest.DONE)
    {
      if(request.status===200)
      {var names= request.responseText;
        names = JSON.parse(names);
        var list='';
        for (var i = 0; i < names.length; i++)
        {
          list +='<li>' + names[i]+'</li>';
        }
          var ul=document.getElementById('namelist');
          ul.innerHTML=list;

      }
    }
  }
    var nameInput =document.getElementById('name');
    var name= nameInput.value;
    request.open('GET','http://ajishlonappan.imad.hasura-app.io/submit_name?name=' + name, true);
    request.send();
};
