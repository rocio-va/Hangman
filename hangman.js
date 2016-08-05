var word= ""; //palabra para adivinar
var hiddenWord = "";
var words = ["perro", "suerte", "montaña", "puerta"]; 
var fails = 0;
word = words[Math.floor(Math.random()*words.length)];
hideWord(word);
document.getElementById("word").innerHTML = hiddenWord;
document.getElementById("btn").addEventListener("click", checkInput);

function hideWord(word)
{
	for (var i = 0; i < word.length; i++) {
		hiddenWord += "_ ";
	};
}
function checkInput()
{
	var input = document.getElementById("input").value
	document.getElementById("input").value = "";
	if(input.length === 1)
		checkLetter(input);
	else if(input.length === word.length)
		checkWord(input);
	else
		alert("No sabes contar.");
}
function checkLetter(letter)
{
	var hidden = false;
	for (var i = 0; i < word.length; i++) {
		if(word.charAt(i) === letter)
		{
			//hiddenWord.charAt(i*2) = letter;
			hiddenWord = hiddenWord.substring(0, i*2) + letter + hiddenWord.substring(i*2+1, hiddenWord.length);
			document.getElementById("word").innerHTML = hiddenWord;
			hidden = true;
		}
	};
	if(!hidden)
		fails++;
	checkWin();
	checkLost();
}
function checkWord(input)
{
	if(input === word)
		win();
	else
	{	
		fails++;
		checkLost();
	}
}

function checkWin()
{
	var sameWord = true;
	for (var i = 0; i < word.length; i++) {
		if(word.charAt(i) != hiddenWord.charAt(i*2))
			sameWord = false
	};
	if(sameWord)
		win();
}
function checkLost()
{
	if(fails === 6)
		lost();
}

function win()
{
	alert("Has ganado! La palabra era " + word + ".");
	window.location.reload();
}

function lost()
{
	alert("Has perdido! La palabra era " + word + ".");
	window.location.reload();
}



