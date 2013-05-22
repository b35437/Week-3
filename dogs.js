//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 3 Project
//Description: Story continuation from week 1 & 2 projects.

//global Variables
var allDogBreeds = ["Beagle", "Mastiff", "Bulldog", "Pitbull", "Collie"];
var petShop = "Dogs Haven";
var dogName = "\"Benny\"";
var dogShots = true;
var dogTreatment = true;
var play = 1045;
var ladyConversationOne = "Hello Sir, how may i help you? ";
var ladyConversationTwo = "Great we have a nice selection of pure breed dogs to chose from. ";


///////////////////////////////// Start Objects ///////////////////////////////////

var dogs = {
	dogBreedNotAvailable: ["Mastiff", "\nPitbull"],
	availableBreed: ["\nBulldog", "\nCollie", "\nBeagle",],
	playWithDog: true,
	playChoice: "Bulldog",
	dogBreedPrice: 350,
	
	grooming: function(groomed) {
		console.log("The following list of dogs are unavailable due to being groomed\n" + groomed);
	}
}

///////////////////////////////// End Objects ///////////////////////////////////


///////////////////////////////// Start Functions ///////////////////////////////////

//string function conversation between the lady and I
var talkingToLady = function(conversationOne, conversationTwo) {
	//local variables
	var myResponse = "Yes Ma'am I am looking to buy a dog. ";
	var fullConversation = conversationOne + myResponse + conversationTwo;
	
	//return string
	return fullConversation;
};

//for loop using JSON data
var dogList = function (dogListJson) {
	for (var i = 0; i < dogListJson.dogs.length; i++) {
		var dogs = dogListJson.dogs[i];
		console.log("Dog Breed: " + dogs.dogBreed + ", \nAge: " + dogs.dogAge + ", \nwe currently have " + dogs.dogBreedAmount + " of this breed \nPrice: $" + dogs.dogPrice);
		console.log(" -------------------------------- ");
	}
};

//do the dogs have their shots
//function using boolean
var dogsHealthy = function(dogTreatment, dogShots) {
	var statement;
	
	if (dogTreatment === true && dogShots === true) {
		console.log("Yes the dogs are up to date on all their shots. ");
		statement = true;
			
	} else {
		console.log("I am sorry, the dogs are not up to date on their shots. ");
		statement = true;
	}
	
	//return boolean
	return statement;
};

//function on getting a dog to play
//information pulled from dogs object
var playDogs = function(dogs) {
	//local variables
	var availableToPlay = dogs.availableBreed;
	var notAvailable = dogs.dogBreedNotAvailable;
	var choiceToPlay = dogs.playChoice;
	var playFetch = dogs.playWithDog;
	
	//check if choice to play is bulldog
	if(choiceToPlay === "Bulldog") {
		console.log("You are now ready to start playing with the " + choiceToPlay);
		console.log("Here is his favorite ball, he loves to play fetch");
		
		//calling the dogPlayFetch function
		dogPlayFetch(play);

	} else if (choiceToPlay === "Mastiff" || choiceToPlay === "Pitbull") {
		console.log("I am sorry These are unavailable to play " + notAvailable);
	} else {
		console.log("The following Dogs are available to play " + availableToPlay);
	};
}

// function for playing with dog
var dogPlayFetch = function (play) {
	var stopPlay = 1100;
	var count = 0;
	
	//while loop for times i tossed the ball
	//based on the allotted time
	while(play < stopPlay) {
		play += 5;
		count++;
		if (play < stopPlay) {
			console.log("Tossed the ball " + count + " time");
		} else {
			//return the number
			return count;
		};
	}
}

// all dogs are ready to buy
//are you interested in one
var buyDog = function (allDogBreeds) {
	//local variables
	var myMoney = 500;
	var tax = .05;
	var dogPrice = 350;
	var grandTotal = 500 - (350*0.05);
	
	console.log("Do you have an idea of what dog you may be interested in? ");
	console.log("Yes Ma'am, i am going to go with the");
	console.log(allDogBreeds[2]);
	
	if (myMoney > dogPrice) {
		console.log("Ok sir for the " + allDogBreeds[2] + " he is $" + dogPrice + " now after taxes he comes to");
		console.log("a grand total of " + grandTotal);
	} else {
		console.log("Thank you for your time Ma'am, but i ca not afford the " + allDogBreeds[2]);
	}
	
	//return array
	return allDogBreeds;
}

///////////////////////////////// End Functions ///////////////////////////////////


///////////////////////////////// Start Output ///////////////////////////////////
//introduction into petshop
console.log("Welcome to " + petShop);

console.log(" "); //spacer

//talkingLady string
console.log(talkingToLady(ladyConversationOne, ladyConversationTwo));

console.log(" "); //spacer

//Json Data output
console.log("Here is our current Dog Listing: ");
dogList(dogListJson)

console.log(" "); //spacer

//calling function dogsHealthy-boolean
console.log("Have the dogs had their shots up to date?");
dogsHealthy(dogTreatment, dogShots)
console.log(" "); //spacer

//calling object function
//list of dogs being groomed
//getter, gets function within the object
dogs.grooming(dogs.dogBreedNotAvailable);

console.log(" "); //spacer
//pick the dog u wish to play fetch with
playDogs(dogs)

console.log(" "); //spacer

//calls the buy dog function
buyDog(allDogBreeds);

//got the god of my choice, output his name
console.log("Ok sir now for his certificate what name would you like to put on it?");
console.log("Ma'am i would like his name to be " + dogName);

///////////////////////////////// End Output ///////////////////////////////////