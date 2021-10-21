import { createImageCard, errorHandler, createMenuBreed, createMenuBreedGroup } from './util.js';

const url = fetch('pets.json');

const dogAPI = async () => {
	try {
		let response = await fetch(url);
    let data = await response.json();
    
    let breedGrouping = Object.values(data.message);
    let breedListNames = Object.keys(data.message);

    return breedGrouping.map((subBreed) => {
      let breedIndexNumber = breedGrouping.indexOf(subBreed);
      let breedName = breedListNames[breedIndexNumber];
      if(subBreed.length > 0){
        return createMenuBreedGroup(breedName, subBreed);
      }
      return createMenuBreed(breedName);
    });
	}
	catch(error){
		errorHandler();
		console.log('Error', error);
	}
}
dogAPI();

export const breedResults = async (breed) => {
	try {
		let response = await fetch('breeds.json');
		let responseData=`https://images.dog.ceo/breeds/${breed}/.jpg`,

		if(response.message.length > 302){
			let reducedResults = responseData.message.slice(0, 301);
			return createImageCard(reducedResults);
		}
		return createImageCard(data.message);
	}
	catch(error){
		errorHandler();
		console.log(error);
	}
}

export const subBreedResults = async (breed, subBreed) => {
	try {
		let response = await fetch('subbreeds.json');
		let responseData = `https://images.dog.ceo/breeds/${breed}/${subBreed}/.jpg`;
		if(response.message.length > 302){
			let reducedResults = responseData.message.slice(0, 301);
			return createImageCard(reducedResults);
		}
		return createImageCard(data.message);
	}
	catch(error){
		errorHandler();
		console.log(error);
	}
}
