$(function(){
get_username();
$("#textbox").keypress(function(event){
	if ( event.which == 13){
		if ( $("#enter").prop("checked") ){
			$("#send").click();
				event.preventDefault();
				}
		}

	});

$("#send").click(function(){
var username = "<span id ='username' = >You: </span>";
var newMessage = $("#textbox").val();
$("#textbox").val("");
var prevState = $("#container").html();
if (prevState.length > 3){
		prevState = prevState + "<br>";
	}
$("#container").html(prevState + username + newMessage);
$("#container").scrollTop($("#container").prop("scrollHeight"));
ai(newMessage);
});
});

function get_username(){
send_message("Hello, what is your name?");
}



function send_message(message){
var prevState = $("#container").html();
if (prevState.length > 3){
	prevState = prevState + "<br>";
}
$("#container").html(prevState +"<span class = 'currentMessage'>" + "<span id = 'bot'>Chatbot: </span>" + message +"</span>");
$(".currentMessage").hide();
$(".currentMessage").delay(500).fadeIn();
$(".currentMessage").removeClass("currentMessage");
}


var username = "";
function ai(message){
		if (username.length<3){
			username = message;
			send_message("Nice to meet you " + username + ", how are you doing?");
		}
		
		if(message.indexOf("how are you")>=0){
			send_message("thanks, i am good");
		}
		
		if(message.indexOf("what time is it")>=0){
			 var date = new Date();
			 var h = date.getHours(); 
			 var m = date.getMinutes(); 
			 var s = date.getSeconds();
			
			send_message("current time is " + h + ":" + m);
		}
		if(message.indexOf("what else")>=0){
			send_message("tell me something!!");
		}
		if(message.indexOf("i have nothing")>=0){
			send_message("ok! are you in love?");
		}
		if(message.indexOf(" yes i am")>=0){
			send_message(" the girl must be very lucky!!");
		}
	}
