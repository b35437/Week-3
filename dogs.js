//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 3 Project
//Description: Story continuation from week 1 & 2 projects.

//global Variables
var petShop = "Dogs Haven";
var dogName = "\"Benny\"";
var dogShots = true;
var dogGroom = true;
var grooming;
var ladyConversationOne = "Hello Sir, how may i help you? ";
var ladyConversationTwo = "Great we have a nice selection of pure breed dogs to chose from. ";


///////////////////////////////// Start Functions ///////////////////////////////////

//string function conversation between the lady and i
var talkingToLady = function(conversationOne, conversationTwo) {
	//local variables
	var myResponse = "Yes Ma'am I am looking to buy a dog. ";
	var fullConversation = conversationOne + myResponse + conversationTwo;
	
	return fullConversation;
};

//json data
var dogList = function (dogListJson) {
	for (var i = 0; i < dogListJson.dogs.length; i++) {
		var dogs = dogListJson.dogs[i];
		console.log("Dog Breed: " + dogs.dogBreed + ", \nAge: " + dogs.dogAge + ", \nwe currently have " + dogs.dogBreedAmount + " of this breed \nPrice: $" + dogs.dogPrice);
		console.log(" -------------------------------- ");
	}
};

//do the dogs have their shots
//pull information from dogs object
var dogsHealthy = function(dogGroom, dogShots) {
	var statement;
	
	if (dogGroom === true && dogShots === true) {
		console.log("Yes the dogs are up to date on all their shots. ");
		statement = true;
			
	} else {
		console.log("I am sorry, the dogs are not up to date on their shots. ");
		statement = true;
	}
	return statement;
};


///////////////////////////////// End Functions ///////////////////////////////////

///////////////////////////////// Start Objects ///////////////////////////////////

var dogs = {
	dogBreed: ["Beagle", "\nMastiff", "\nBulldog"],
	totalBreed: ["Beagle", "Mastiff", "Bulldog", "Pitbull", "Collie"],
	dogBreedAmount: [2, 4, 2, 1, 1],
	
	grooming: function(groomed) {
		console.log("The following list of dogs are unavailable due to being groomed\n" + groomed);
	}
}

///////////////////////////////// End Objects ///////////////////////////////////


///////////////////////////////// Start Output ///////////////////////////////////
console.log("Welcome to " + petShop);
console.log(" "); //spacer
console.log(talkingToLady(ladyConversationOne, ladyConversationTwo));

console.log(" "); //spacer

//Json Data output
console.log("Here is our current Dog Listing: ");
dogList(dogListJson)

console.log(" "); //spacer

//calling function dogsHealthy
console.log("Have the dogs had their shots up to date?");

dogsHealthy(dogGroom, dogShots)
console.log(" "); //spacer

//calling object function
//list of dogs being groomed
dogs.grooming(dogs.dogBreed);

///////////////////////////////// End Output ///////////////////////////////////