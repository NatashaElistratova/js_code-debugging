const greeting = (phrase) => {
    alert(phrase);
}

const title = document.querySelectorAll('h1')

const createGreetingMessage = (name) => {
    const messege = `Hello, ${name}!`;

    greeting(message);

    title.textContent = message;
}

createGreetingMessage('Natasha')
