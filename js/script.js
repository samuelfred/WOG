console.log('hello');

$( function() {
    $( "#datepicker" ).datepicker();
  } );




//function myDate(){
// $('.dev-list').on('click','.dev-list', function(){
// 	console.log('hi')
// 	//console.log($(this).text());
//    //document.getElementsByClassName('dev-date').innerHTML = $(this). text();

// });
//// 

//document.addEventListener('DOMContentLoaded', function() {

    //var  = document.getElementById('txtName').value;
   // var mobile = document.getElementById('txtMobile').value;
var devotional = document.getElementById('devotional');

var i;

var d = new Date();
//console.log(typeof(d.toString()))
 
function createList(){

		for (i = 0 ; i < 13; i++) {

		devotional.innerHTML += '<li class="dev-list">';
		devotional.innerHTML += d.toString().substring(0,15);
		devotional.innerHTML += '</li>';
		d.setDate(d.getDate()-1);

		//var devList = document.getElementsByClassName('dev-list');
		}
}

if (devList.length == 13) {

$('.dev-list').on('click', function() {

 document.getElementById('dev-date').innerHTML = $(this). text();

  });
}
//});