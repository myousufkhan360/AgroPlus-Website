
//Contact page


window.onload = function(){
	var name1 = document.getElementById("name");
	
	name1.onfocus = function(){
		if(name1.value == "Your name"){
			name1.value="";
			name1.style.color = "#fff";
		}
		
	};
	
	name1.onblur = function(){
		if(name1.value == ""){
			name1.value = "Your name";
			name1.style.color = "#ffff66";
		}
	};
	
	
	var email1 = document.getElementById("email");
	
	email1.onfocus = function(){
		if(email1.value == "Your email"){
			email1.value="";
			email1.style.color = "#fff";
		}
		
	};
	
	email1.onblur = function(){
		if(email1.value == ""){
			email1.value = "Your email";
			email1.style.color = "#ffff66";
		}
	};
	
	
	var msg1 = document.getElementById("message");
	
	msg1.onfocus = function(){
		if(msg1.value == "Your message"){
			msg1.value="";
			msg1.style.color = "#fff";
		}
		
	};
	
	msg1.onblur = function(){
		if(msg1.value == ""){
			msg1.value = "Your message";
			msg1.style.color = "#ffff66";
		}
	};
	
	
	document.getElementById("name").style.color = "#ffff66";
	document.getElementById("email").style.color = "#ffff66";
	document.getElementById("message").style.color = "#ffff66";
	
	
}

function send()								
	{
		alert("Thank you for your respond");
	}
	
	function reset1()
	{
	
		document.getElementById("contact-form").reset();
	
		
	}