use questiondb;

db.dropDatabase();

var questions = [
  {
    question: "what's your name?",
    answer: "Clare"
  }
]

db.questions.insertMany(questions);
db.questions.find();
