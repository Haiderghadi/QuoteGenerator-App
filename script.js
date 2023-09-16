let person = document.querySelector(".person");
let quote = document.querySelector(".quote");
let button = document.querySelector(".btn");

const quotes = [
  {
    person: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    person: "William Shakespeare",
    quote: "To be or not to be, that is the question.",
  },
  {
    person: "Martin Luther King Jr.",
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
  },
  {
    person: "Mark Twain",
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
  },
  {
    person: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    person: "Mahatma Gandhi",
    quote: "You must be the change you want to see in the world.",
  },
  {
    person: "Nelson Mandela",
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
  },
  {
    person: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    person: "Abraham Lincoln",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    quote:
      "I would like to be known as a person who is concerned about freedom and equality and justice and prosperity for all people.",
    person: "Rosa Parks",
  },
];

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = '"' + quotes[random].quote + '" -';
  person.innerText = quotes[random].person;
});
