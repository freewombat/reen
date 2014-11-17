var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var weekDay = today.getDay();
var word = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
if(dd<10) {
	mm='0' + mm
};
today = mm+'/'+dd+'/'+yyyy;
document.getElementById("jsDate").innerHTML = today;
document.getElementById("jsDateWords").innerHTML = word[weekDay];

$("#thelightbox").click(function() {
	console.log($("#demolightbox"));
	$("#demolightbox").lightbox();
});


$(document).ready(function() {
    
$.ajax({url:"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"}).done(function(response) {
    for(i=0;i<10;i++) {
          $("#hackernews").append("<li>"+response[i]+"</li>");
    }
});
});
