// Set button text with emoji
document.getElementById('button').innerHTML = '👉 When You Feel Sad Just Click On Me';

function generateJokeCard(jokeSetup, jokePunchline) {
    // Clear previous joke card if it exists
    const jokesContainer = document.getElementById('jokes-container');
    jokesContainer.innerHTML = ''; // Removes all existing child elements

    // Create card container
    const card = document.createElement('div');
    card.className = 'joke-card';

    // Add joke text
    const jokeText = document.createElement('div');
    const setup = document.createElement('h2');
    setup.textContent = `Joke: "${jokeSetup}"`;

    const punchline = document.createElement('p');

    // Generate random emoji
    const emojis = ['😂', '🤣', '😅', '😜', '😎', '🥳', '😄'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Add punchline with emoji
    punchline.textContent = `Ans: ${jokePunchline} ${randomEmoji}`;

    jokeText.append(setup, punchline);

    // Append joke text to the card
    card.append(jokeText);

    // Append card to jokes container
    jokesContainer.appendChild(card);
}

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            generateJokeCard(data.setup, data.punchline);
        })
        .catch(err => console.error('Error fetching joke:', err));
}

// Add event listener to the button
document.getElementById('button').addEventListener('click', fetchJoke);
