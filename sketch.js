
let agitation = 0
let angery = 0

let time = 0
let lines = []; //creating an array for the text

let enterClicked = 'false'
let disconnectClicked = 'false'

let ball = "mine"
	let pplTimer = 50

let textCol = "blue"

let answer

function setup() {

  	createCanvas(windowWidth, windowHeight)

  textfield = createInput();
  textfield.position(width/2.6, height-height/6);
  textfield.size(width/2.05, height/10);
  textfield.style('font-size', '16px');

//------------------------------------------------------------------------------------------------------------------tracker stuff, pay no attention
  		capture = createCapture(VIDEO) //This captures an image from the camera
	    capture.size(800, 600)
	    capture.hide()

	    tracker = new clm.tracker()
	    tracker.init()
	    tracker.start(capture.elt)
//------------------------------------------------------------------------------------------------------------------tracker stuff, pay no attention
	
}


function draw() {    

    background(230, 220, 190)
    fill(245)
    stroke(200)
    	fill(30)
    	rect(width/200, height/5, width/4, height/2.92)
    	fill(100)
    	textSize(20);
    	stroke(100)
		text('User Disconnected Camera', width/25, height/2.7);


    fill(245)
    stroke(200)
    rect(-10, -10, width+20, height/6+10)//top
    rect(width/3.8, height/5, width-width/3.7, height-height/2.5, 5)//text box
    rect(width/3.8, height-height/5.4, width-width/3.7, height/7.4, 5)//text input

    	textSize(60);
    	stroke(255, 210, 100)

    	fill(255, 210, 100)
    		push()
    		translate(width/7, height/12.5)
    		rotate(PI / -25.0);
    		ellipse(0,0, width/3.6, height/7)
    		pop()
    	stroke(235, 149, 52)
    	fill(245)
    	text("BroMingle", width/20, height/9.5)
    	textSize(20);
    	fill(20)
		stroke(20)
	    	push()
	    	translate(width/2.5, height/9)
	    	rotate(PI / -25.0);
	    	textSize(30);
	    	text("Talk to 'new' people!", 0, 0)
	    	pop()
    
    
    textSize(45);
    	fill(70, 200, 245)
    	stroke(70, 200, 245)
    	text("128k online now!", width-width/4, height/7.7)
	fill(100, 100, 200)
	stroke(100, 100, 200)
	rect(width-width/10, height/60, width/20, height/20, 3)
    	fill(245)
    	textSize(15);
    	stroke(245)
    	text("  ;) Smile", width-width/10, height/20)
    stroke(150)
    rect(width-width/7.65, height/60, width/35, height/20, 3)
    	textSize(20);
    	fill(200, 0, 0)
    	stroke(200, 0, 0)
    	text("G+",  width-width/8, height/20)
    	fill(0, 200, 0)
    	stroke(0, 200, 0)
    	text("C",  width-width/8, height/20)
    stroke(120, 220, 250)
    fill(120, 220, 250)
    rect(width-width/5.45, height/60, width/20, height/20, 3)
    	fill(245)
    	stroke(120, 220, 250)
    	text("   yeet", width-width/5.6, height/20)
	    	push()
	    	translate(width-width/5.7, height/25)
	    	rotate(PI / -3.0);
	    	ellipse(0, 0, width/60, height/60)
	    	stroke(245)
	    	arc(width/500, -height/250, width/100, height/50, PI/2, 3*PI/2)
			arc(-width/200, 0, width/100, height/80, 0, PI)
	    	pop()
	    	stroke(245)
	    	arc(width-width/5.85, height/30, width/150, height/80, PI, 0)


								stroke(210)
								if (enterClicked == 'true'){
									fill(255, 0, 0)
								} else {
									fill(255)
								}								
								rect(width-width/8.2, height-height/6, width/10, height/10)//Enter Button

								if (disconnectClicked == 'true'){
									fill(255, 0, 0)
								} else {
									fill(255)
								}
								rect(width/3.6, height-height/6, width/10, height/10)//Disconnect Button

    fill(110)
    stroke(110)
	text("You're now chatting with a new person. Smile!", width/3.5, height/4)
    	
    fill(245)
    stroke(200)
	rect(width/7, height-height/10.5, width/14, height/40, 3) //snapshot box
		fill(100)
		stroke(150)
		textSize(15);
		text("Take Photo", width/6.6, height-height/13)
		fill(150)
		stroke(150)
		text("Click for more options", width/30, height-height/13)

    	stroke(200)
    	textSize(20);
    	fill(30)
    	rect(width/200, height-height/2.25, width/4, height/2.92)
    	fill(100)
    	stroke(100)
    	text('User Disconnected Camera', width/25, height-height/3.75);
    	image(capture, width/200, height-height/2.25, width/4, height/2.92) //Your Screen



//-------------------------------------------------------------------ARRAY STUFF-----------------------------------------------------------ARRAY STUFF

		let answerHeight1 = height/3.2
		let answerHeight2 = answerHeight1 + height/12
		let answerHeight3 = answerHeight2 + height/12
		let answerHeight4 = answerHeight3 + height/12
		let answerHeight5 = answerHeight4 + height/12
		let answerHeight6 = answerHeight5 + height/12


if (textCol == "blue"){
	fill(200, 0, 120)
	stroke(200, 0, 120)
} else if (textCol == "grey"){
	fill(0, 200, 0)
	stroke(0, 200, 0)
} else {
	fill(100, 0, 200)
	stroke(100, 0, 200)
}
text(lines[lines.length-6], width/3, answerHeight1) //1
if (textCol == "red"){
	fill(200, 0, 120)
	stroke(200, 0, 120)
} else {
	fill(100, 0, 200)
	stroke(100, 0, 200)
}
text(lines[lines.length-5], width/3, answerHeight2) //2
if (textCol == "blue"){
	fill(200, 0, 120)
	stroke(200, 0, 120)
} else {
	fill(100, 0, 200)
	stroke(100, 0, 200)
}
text(lines[lines.length-4], width/3, answerHeight3) //3
if (textCol == "red"){
	fill(200, 0, 120)
	stroke(200, 0, 120)
} else {
	fill(100, 0, 200)
	stroke(100, 0, 200)
}
text(lines[lines.length-3], width/3, answerHeight4) //4
if (textCol == "blue"){
	fill(200, 0, 120)
	stroke(200, 0, 120)
} else {
	fill(100, 0, 200)
	stroke(100, 0, 200)
}
text(lines[lines.length-2], width/3, answerHeight5) //5
if (textCol == "red"){
	fill(200, 0, 120)
	stroke(200, 0, 120)
} else {
	fill(100, 0, 200)
	stroke(100, 0, 200)
}
text(lines[lines.length-1], width/3, answerHeight6) //6

//--------------------------------------------------------------------RESPONSE STUFF----------------------------------------------------RESPONSE STUFF
var s = textfield.value();
  var words = s.split(/(\W+)/);

if (ball == "theirs") {
	pplTimer = pplTimer - 1
}

	if (pplTimer <= 0) {
		ball = "mine"
		pplTimer = 50
		textCol = "red"

		let basics = ["M or F","How old R U?","my camera doesn't work","Show me ur dick","God ur ugle","ur ugly","I h8 your face","honestly leave","you kinda suck lol","what are you supposed to be"]
		
		
	
			answer = random(basics)
		
		


			let origins = ["M or F","How old R U?","my camera doesn't work"]
			let numbersLow = ["hot","too young to be online dumbass","rules say 18 or older, fuck off","go back to kindergarten looser"]
			let numbersMed = ["normal age i guess","u sure ur not older","u sure ur not younger u look like a fukin kid an i dont wanna go to jail"]
			let numbersHigh = ["fuck ur old","ok boomer","fuck off grampa"]
			let greetings = ["hey asshole", "u should be more formal, dont u know who i am?", "hi", "hello", "whats up", "who are you", "wru doin", "sup", "sry my camera doesnt work"]
			let noResponse = ["No?", "no"]
			let answers = ["you look like absolute trash", "who did your makeup lol", "you look like you need at least one bath","because you suck","because I don't like you","because you could literally be anyone better","because i've got nothing else to do","cuz i dunno about u, but I like looking at normal ppl lol","because you shouldn't act so triggered all the time","bcause you could be so much happier"]
			let trollResponces = ["lol fgt", "wat, u mad?", "u mad bro?", "god ur a snowflake", "why go on internet if u dont want criticism", "smile more btch jesus", "what would god say to u bein a lil bitch", "nothing u can say will hurt me, im immune lol", "u have autism", "ur gey", "fuk u", "god ur a loser lol", "christ u liberals get so triggered lol", "wat are u a pansy or something", "lol ur mad", "what r u gunna cry or something?"]
			let agressiveResponces = ["fuck u", "screw u asshole", "don't be a pansy", "why would u say that","U literally have no reason to be so smug","dont pretend to be so nice","u an me both know youre not happy lol","dont be stupid, this isnt fun","this isnt funny, stop acting like it"]

		for (var i = 0; i < words.length; i++) { 
			if (time <= 1) {
				answer = random(origins)
			}
			if ((words[i] == "Hi") || (words[i] == "hi") || (words[i] == "Hello") || (words[i] == "hello") || (words[i] == "Hai") || (words[i] == "hai") || (words[i] == "Hi?") || (words[i] == "hi?") || (words[i] == "Hello?") || (words[i] == "hello?") || (words[i] == "Bonjour") || (words[i] == "bonjour")) {
			     answer = random(greetings);
			}
			if ((words[i] == "wym") || (words[i] == "WYM") || (words[i] == "what") || (words[i] == "What") || (words[i] == "wha") || (words[i] == "Wha") || (words[i] == "why") || (words[i] == "Why")) {
			     answer = random(answers);
			}
			if ((words[i] == "ily") || (words[i] == "ur great") || (words[i] == "happy") || (words[i] == "positive") || (words[i] == "nice") || (words[i] == "love") || (words[i] == "cute") || (words[i] == "sweet") || (words[i] == "sweetie") || (words[i] == "sweetheart") || (words[i] == "beautiful")){
		
				if (angery >= 10) {
					print('Clonked')
					lines.push("User Disconnected")
					lines.push(" ")
					lines.push(" ")
					lines.push(" ")
					lines.push(" ")
					lines.push(" ")
					textCol = "grey"
					time = 0
					angery = 0
				} else {
					answer = random(agressiveResponces)
					angery = angery+1
				}
			}
			if ( (words[i] == "M") || (words[i] == "Male") && words.length < 2) {
	      		answer = "Ur an ugly dude no offense"
	      	}
	      	if ( (words[i] == "F") || (words[i] == "Female") && words.length < 2) {
	      		answer = "U sure ur a girl?"
	      	}
	      	if ( (words[i] == "mean") || (words[i] == "fuck") || (words[i] == "Fuck")|| (words[i] == "dick") || (words[i] == "asshole") || (words[i] == "suck") || (words[i] == "screw") || (words[i] == "hate")){
	      		answer = random(trollResponces)
	      	}
	      	if ((words[i] == "1") || (words[i] == "2") || (words[i] == "3") || (words[i] == "4") || (words[i] == "5") || (words[i] == "6") || (words[i] == "7") || (words[i] == "8") || (words[i] == "9") || (words[i] == "10") || (words[i] == "11") || (words[i] == "12")){
	      		answer = random(numbersLow)
	      	}
	      	if ((words[i] == "13") || (words[i] == "14") || (words[i] == "15") || (words[i] == "16") || (words[i] == "17") || (words[i] == "18") || (words[i] == "19") || (words[i] == "20") || (words[i] == "21") || (words[i] == "22") || (words[i] == "23") || (words[i] == "24")){
	      		answer = random(numbersMed)
	      	}
	      	if ((words[i] == "40") || (words[i] == "50") || (words[i] == "60") || (words[i] == "70") || (words[i] == "80") || (words[i] == "90")){
	      		answer = random(numbersHigh)
	      	}

	      	







	    } //end of FOR loop

		lines.push(answer)

	}






//------------------------------------------------------------------------------------------------------------------tracker stuff, pay no attention
   // let positions = tracker.getCurrentPosition() //returns an array of positions... whatever that is...
	  //  let i = 0
	  //   while (i < positions.length) {

			// textSize(15);
	  //       // ellipse(positions[i][0], positions[i][1], 4, 4)
	  //       // text(i, positions[i][0], positions[i][1])          //the text tells what the 'i' variable is

	  //       i += 1
	  //   }
//------------------------------------------------------------------------------------------------------------------tracker stuff, pay no attention

// if (positions.length > 0) {


// 	let mouthLeftX = positions[50][0]
// 	let mouthLeftY = positions[50][1]

// 	let mouthRightX = positions[44][0]
// 	let mouthRightY = positions[44][1]

// 	let smileLeft1 = dist(mouthLeftX, mouthLeftY, positions[59][0], positions[59][1])
// 	let smileLeft2 = dist(mouthLeftX, mouthLeftY, positions[58][0], positions[58][1])

// 	let smileRight1 = dist(mouthRightX, mouthRightY, positions[61][0], positions[61][1])
// 	let smileRight2 = dist(mouthRightX, mouthRightY, positions[56][0], positions[56][1])

// 	}


//https://www.masswerk.at/elizabot/eliza.html
//https://editor.p5js.org/rmacdonald/sketches/ByEHYnJNM


} //end of DRAW function


function mousePressed(){
	

	if (mouseX > width-width/8.2 && mouseX < width-width/8.2+width/10 && mouseY > height-height/6 && mouseY < height-height/6+height/10 && ball == "mine") {
		print('Clicked')
		enterClicked = 'true'
		lines.push(textfield.value())
		ball = "theirs"
		textCol = "blue"
		time = time+1
	}		

	if (mouseX > width/3.6 && mouseX < width/3.6+width/10 && mouseY > height-height/6 && mouseY < height-height/6+height/10 && ball == "mine") {
		print('Clonked')
		disconnectClicked = 'true'
		lines.push("User Disconnected")
		lines.push(" ")
		lines.push(" ")
		lines.push(" ")
		lines.push(" ")
		lines.push(" ")
		textCol = "grey"
		time = 0
	}

}

function mouseReleased(){
	enterClicked = 'false'
	disconnectClicked = 'false'
	
//Use a p5 array that you add lines to. Add to array, only display last 5 elements. This will eliminate need for IF statements.
	
}



// function newText() {
//   if (answerheight > width-width/5) {
//     rect(width/4, height/5, width-width/3.9, height-height/2.5, 10)
//     answerheight = 58;
//   }
//   fill(0);
//   text(textfield.value(), 10, answerheight);
//   answerheight = answerheight+22;
//   //If we don't find any of the keywords that we're
//   //looking for, we can still provide some sort of 
//   //generic response.
//   answer = "I'm not sure what you mean."
//   var s = textfield.value();
//   var words = s.split(/(\W+)/);
//   //This loop checks the words from the question
//   //one at a time.
//   for (var i = 0; i < words.length; i++) {  
//     //This section is where you look for keywords
//     //and provide responses when those keywords
//     //are found. Adding and editing this section
//     //will allow you to make the program interact
//     //in a more detailed and intelligent way.
//     if (words[i] == "Malcolm") {
//       answer = "I remember Duncan's son.";
//     }
//     if (words[i] == "Hamlet") {
//       answer = "That's the other play.";
//     }
//     //This example shows how you can look for multiple
//     //variations of a particular word.  
//     if ((words[i] == "witch") || (words[i] == "witches")) {
//       answer = "Listen to the weird sisters' warnings.";
//       fill(150, 0, 0);
//       ellipse(365, answerheight+2, 190, 120);
// 			image(witchesimage, 305, answerheight-38, 123, 81);
//     }
//     //This example shows how you can create a set
//     //of possible responses and let the code choose
//     //one of those responses at random.
//     if (words[i] == "Banquo") {
//       answer = random([
//         "Who's Banquo?", 
//         "Lord Banquo?", 
//         "Never heard of him."
//       ]);
//     }
//     //This section shows how you can check for a 
//     //combination of words. This is a bit tougher
//     //because you need to know what happens when
//     //you find just one of the words AND what happens
//     //when you find all of the words within a
//     //single question.
//     if ((words[i] == "Lady") || (words[i] == "lady")) {
//       lady = 1;
//     }
//     if ((words[i] == "Macbeth") || (words[i] == "MacBeth")) {
//       macbeth = 1;
//     }   
//   //After we've checked all of the words from the
//   //user's question, we can make some final 
//   //decisions about the proper response, then we
//   //can actually put that response on the screen.
//   }
//   if ((lady == 1) && (macbeth == 1)) {
//     answer = "The Queen is dead."
//   }
//   if ((lady == 1) && (macbeth == 0)) {
//     answer = "Which lady?"
//   }
//   if ((lady == 0) && (macbeth == 1)) {
//     answer = "He killed Duncan."
//   }
//   fill(20, 120, 120);
//   text(answer, 10, answerheight);
//   answerheight = answerheight+22;
//   //If we're using variables to check for combinations
//   //of words, we should reset those variables and get
//   //ready for the next question.
//   lady = 0;
//   macbeth = 0;
// }


// function findarea() {
//   area = textfield.value() * 100;
//   text("The area of the rectangle is "+area, 20, 155);
// }










// /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ TO DO LIST /!\ 
//
//										1) add functionality to "Disconnect" button
//
//										2) add text to both buttons
//
//										3) increace functionality of "agitation" meter
//
//										4) add different modules
//
//										5) make buttons actually functional (yeet, smile, G+, take photo, etc.)
//										
//										
//										
//
//
//
//
//
//
										//https://www.masswerk.at/elizabot/eliza.html
										//https://editor.p5js.org/rmacdonald/sketches/ByEHYnJNM







