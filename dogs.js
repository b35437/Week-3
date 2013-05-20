//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 3 Project
//Description: Story continuation from week 1 & 2 projects.

//global Variables
var petShop = "Dogs Haven";
var dogName = "\"Benny\"";
var ladyConversationOne = "Hello Sir, how may i help you? ";
var ladyConversationTwo = "Great we have a nice selection of pure breed dogs to chose from. ";

///////////////////////////////// Start Objects ///////////////////////////////////

var dogs = {
	dogBreed: ["Beagle", "Mastiff", "Bulldog", "Pitbull", "Collie"],
	dogBreedAmount: [2, 4, 2, 1, 1],
	dogAge: [3, 7, 1, 2, 2],
};

///////////////////////////////// End Objects ///////////////////////////////////

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
		console.log("Dog Breed: " + dogs.dogBreed + ", \nAge: " + dogs.dogAge + ", \nwe currently have " + dogs.dogBreedAmount + " of this breed");
		console.log(" -------------------------------- ");
	}
};


///////////////////////////////// End Functions ///////////////////////////////////


///////////////////////////////// Start Output ///////////////////////////////////
console.log("Welcome to " + petShop);
console.log(" "); //spacer
console.log(talkingToLady(ladyConversationOne, ladyConversationTwo));

console.log(" "); //spacer

//Json Data output
console.log("Here is our current Dog Listing: ");
dogList(dogListJson)

///////////////////////////////// End Output ///////////////////////////////////