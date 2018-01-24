/*  Declare Variables */

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const show = document.querySelectorAll('.show');
const scoreboard= document.querySelector('#scoreboard');
const title = document.querySelector('.title')

/* Missed Variable is let because it will change as questions are missed */
let missed = 0;

/*  Create Araay with Random Phrase */

const phrases = ['Steve is a great programmer', 'Javascript is fun', 'Teamtreehouse is great', 'Way to go', 'Programming is a great profession', 'Dont fake the funk on a nasty dunk'];

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
	let compare = 0;

	const letterSelected =selected.textContent.toLowerCase();
	for (let i=0; i<letters.length; i+=1){
		if(letterSelected === letters[i].textContent.toLowerCase()) {
			letters[i].classList.add('show');	
			compare++; 
			

		}
		
	}
	if (compare > 0) return selected;
	else {
		return null} 
}




keyboard.addEventListener('click', (event) =>{
	if(event.target.tagName=== 'BUTTON'){
	 event.target.className = 'chosen';
     event.target.disabled = 'true';

    let letterFound = checkLetter(event.target);
    
    if (letterFound === null) {
      const attempts = scoreboard.querySelectorAll('.tries')[0];
      attempts.parentNode.removeChild(attempts);
      missed += 1;
    }
    checkWin();
  }
});

function checkWin() {
	const show = document.querySelectorAll('.show');
 
  const overlay = document.getElementById('overlay');
  const title = overlay.querySelector('.title');

  if (show.length === letters.length) {
    title.innerHTML = 'You are a Champion My Friend!';
    overlay.className ='win';
    overlay.style.display = '';
    start.addEventListener('click', () => {
      location.reload();
    });
  } else if (missed >= 5) {
    title.innerHTML = 'Sorry, You Failed!  Try again!';
    overlay.className = 'lose';
  
    overlay.style.display = '';
    start.addEventListener('click', () => {
     location.reload();
    });
  }
}
