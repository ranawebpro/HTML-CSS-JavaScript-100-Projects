const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);


const arrayOfQuotes = [
  {
    author: "Steve Jobs",
    quote:
      "The only way to do great work is to love what you do.",
  },
  {
    author: " - Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Eleanor",
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
  },
  {
    author: "Winston Churchill",
    quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
  },
  {
    author: "Walter",
    quote:
      "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. ",
  },
  {
    author: "Diane McLaren",
    quote:
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
  },
  {
    author: "Dale Carnegie",
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  },
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}
