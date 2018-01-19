/*  Declare Variables */


const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

const show = document.querySelectorAll('.show');
const scoreboard= document.querySelector('#scoreboard')

/* Missed Variable is let because it will change as questions are missed */
let missed = 0;

/*  Create Araay with Random Phrase */

const phrases = ['red', 'green', 'blue', 'green', 'white', 'black'];

/*  Add an event listener to start button with click handler and change the display style */

start.addEventListener('click', () =>{
	overlay.style.display='none';
});


function getRandomPhraseAsArray (array){
	const random = array[Math.floor(Math.random()*array.length)];
	const letter= random.split('');
	return letter;
};

/*

Testing Purposes 

console.log(getRandomPhraseAsArray(phrases));

*/
/*  Store the new word in the word variable */

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhrasetoDisplay(letter){
	for (let i=0; i<letter.length; i+=1){
		let li= document.createElement('li');
		li.innerHTML= letter[i];
		phrase.children[0].appendChild(li);
		if(li.textContent !== ' '){
			li.classList.add('letter');
		}
		else {
			li.classList.add('space');
		}


	}

};


addPhrasetoDisplay(phraseArray);

/* Declare Variable to catch all elements with class of letter */


const letters = phrase.querySelectorAll('.letter');

/*  Not sure why the check letter function doesn't work */

function checkLetter (selected){
	

	const letterSelected =selected.textContent.toLowerCase();
	for (let i=0; i<letters.length; i+=1){
		if(letterSelected === letters[i].textContent.toLowerCase()) {
			letters[i].classList.add('show');
			
		}
		/*
		else {
			return null;
		}
		*/
	}
}




keyboard.addEventListener('click', (event) =>{
	if(event.target.tagName==='BUTTON'){
	 event.target.className = 'chosen';
     event.target.disabled = 'true';

    let letterChosen = event.target;
    checkLetter(letterChosen);

     
	}
});













