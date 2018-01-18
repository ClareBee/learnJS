use questiondb;


db.dropDatabase();

var questions = [
  {
    topic: "identity",
    question: "what is your name?",
    answer: "Clare"
  },
  {
    topic: "security",
    question: "What is your password?",
    answer: "12345"
  }
],
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
