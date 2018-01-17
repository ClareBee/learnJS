use questiondb;

db.dropDatabase();

var questions = [
  {
    question: "what's your name?",
    answer: "Clare"
  }
]

db.questiondb.insertMany(questions);
db.questiondb.find();
