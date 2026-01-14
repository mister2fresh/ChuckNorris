const button = document.querySelector('button');
const jokeDisplay = document.getElementById('joke');

button.addEventListener('click', getJoke);

async function getJoke() {
	try {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await response.json();
		jokeDisplay.textContent = data.value;
	} catch (error) {
		jokeDisplay.textContent = 'Chuck Norris is on lunch break';
		console.error('Error fetching joke', error);
	}
}