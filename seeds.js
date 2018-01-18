use questiondb;


db.dropDatabase();

var questions = [
  {
    topic: "acronyms",
    question: "what is SSH?",
    answer: "Secure Shell"
  },
  {
    topic: "acronyms",
    question: "What is ASCII?",
    answer: "American Standard Code for Information Interchange"
  },
  {
    topic: "acronyms",
    question: "What is DTD?",
    answer: "Document Type Definition"
  },
  {
    topic: "Maths",
    question: "What is the method on Math for exponentiation?",
    answer: ".pow"
  }
]
var randomanswers = [
  {
    topic: "identity",
    answer: "Jane"
  },
  {
    topic: "identity",
    answer: "Liz"
  },
  {
    topic: "security",
    answer: "prohibited"
  }
]

db.questions.insertMany(questions);
db.randomanswers.insertMany(randomanswers);
db.randomanswers.find();
db.questions.find();
