const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let searchValue = '';

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lowerStr = str.toLowerCase();
	results = fruit.filter(function(val){
		let lowerVal = val.toLowerCase();
		return lowerVal.includes(lowerStr);
	})
	// TODO
	return results;
	
}

function searchHandler(e) {
	showSuggestions(search(input.value));
}

function showSuggestions(results, inputVal) {
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
	for (let result of results){
		let listItem = document.createElement('li');
		listItem.innerHTML = result;
		suggestions.appendChild(listItem);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerHTML;
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
}

function removeSuggestion(e) {
	if (!(document.getElementById('fruit').contains(e.target))){
		while (suggestions.firstChild){
			suggestions.removeChild(suggestions.firstChild);
		}
	} 
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
window.addEventListener('click', removeSuggestion);