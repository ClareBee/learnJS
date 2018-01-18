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
]

db.questions.insertMany(questions);
db.questions.find();
