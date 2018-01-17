use questiondb;

db.dropDatabase();

var questions = [
  {
    question: "what's your name?",
    answer: "Clare"
  },
  { question: "What's your password?",
    password: "12345"}
]

db.questions.insertMany(questions);
db.questions.find();
