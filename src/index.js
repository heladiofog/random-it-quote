const quotes = [
  `"The only constant is change." - Heraclitus`,
  `"Computers are fast; programmers keep it slow." - Reddit?`,
  `"Houston, we have a problem." - Apollo 13`,
  `"La ciencia es un horizonte al que se llega, no un premio que cargas en las manos." - Pato, Gravity Falls`,
  `"I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone." - Bjarne Stroustrup`,
  `"Joven, siéntese por favor." - Hugo Moncayo`,
  `"Don’t comment bad code – rewrite it." – Brian Kernighan`,
  `"We have to stop optimizing for programmers and start optimizing for users." Jeff Atwood`,
  `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler`,
  `"I’m not a great programmer; I’m just a good programmer with great habits." – Kent Beck`
];

const getRandomItQuote = () => {
  randomPosition = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomPosition];
  console.log(quote);
}

module.exports = {
  getRandomItQuote
};