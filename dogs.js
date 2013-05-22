//Name: nathan byarley
//Date:
//Term: 1305
//Assignment: Week 3 Project
//Description: Story continuation from week 1 & 2 projects.

//global Variables
var allDogBreeds = ["Beagle", "Mastiff", "Bulldog", "Pitbull", "Collie"];
//var dogBreedPrice = [250, 400, 350, 650, 420];
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
var dogsHealthy = function(dogTreatment, dogShots) {
	var statement;
	
	if (dogTreatment === true && dogShots === true) {
		console.log("Yes the dogs are up to date on all their shots. ");
		statement = true;
			
	} else {
		console.log("I am sorry, the dogs are not up to date on their shots. ");
		statement = true;
	}
	return statement;
};

//function on getting a dog to play
//information pulled from dogs object
var playDogs = function(dogs) {
	var availableToPlay = dogs.availableBreed;
	var notAvailable = dogs.dogBreedNotAvailable;
	var choiceToPlay = dogs.playChoice;
	var playFetch = dogs.playWithDog;
	
	
	if(choiceToPlay === "Bulldog") {
		console.log("You are now ready to start playing with the " + choiceToPlay);
		console.log("Here is his favorite ball, he loves to play fetch");
		
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
	
	while(play < stopPlay) {
		play += 5;
		count++;
		if (play < stopPlay) {
			console.log("Tossed the ball " + count + " time");
		} else {
			return count;
		};
	}
}

// all dogs are ready to buy
//are you interested in one
var buyDog = function (allDogBreeds) {
	//var dogRandom = allDogBreeds;
	//allDogBreeds.random();
	console.log("Do you have an idea of what dog you may be interested in? ");
	console.log("Yes Ma'am, i am going to go with the");
	console.log(allDogBreeds[2]);
	
	return allDogBreeds;
}

///////////////////////////////// End Functions ///////////////////////////////////


///////////////////////////////// Start Output ///////////////////////////////////
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
//calles the function within the object.
dogs.grooming(dogs.dogBreedNotAvailable);

//pick the dog u wish to play fetch with
playDogs(dogs)
console.log(" ");

buyDog(allDogBreeds);

///////////////////////////////// End Output ///////////////////////////////////