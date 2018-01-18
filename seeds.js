use questiondb;

db.dropDatabase();

var questions = [
  {
    topic: "identity",
    question: "what's your name?",
    answer: "Clare"
  },
  {
    topic: "security",
    question: "What's your password?",
    password: "12345"}
]

db.questions.insertMany(questions);
db.questions.find();
