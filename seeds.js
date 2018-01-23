use questiondb;


db.dropDatabase();

var questions = [
  {
    topic: "Acronyms",
    question: "What is SSH?",
    answer: "Secure Shell"
  },
  {
    topic: "Acronyms",
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
  },

  {
    topic: "Maths",
    question: "What's the BigO notation for searching an array?",
    answer: "O(n)"
  },
  {
    topic: "Maths",
    question: "What's the BigO notation for searching a linkedlist?",
    answer: "O(n)"
  },
  {
    topic: "Maths",
    question: "What's the BigO notation for searching a hash table?",
    answer: "O(1)"
  },
  {
    topic: "Maths",
    question: "What is O(n squared)?",
    answer: "Quadratic Time"
  },
  {
    topic: "Maths",
    question: "What is O(2^n)?",
    answer: "Exponential Time"
  },
  {
    topic: "Maths",
    question: "What is O(1)?",
    answer: "Constant Time"
  },
  {
    topic: "Maths",
    question: "What is O(log n)?",
    answer: "Logarithmic Time"
  },
  {
    topic: "Maths",
    question: "'Performance' refers to which two things?",
    answer: "Time and Space Complexity"
  },
  {
    topic: "Maths",
    question: "Which BigO Time relates to nested loops?",
    answer: "Exponential"
  },
  {
    topic: "Maths",
    question: "Which BigO Time relates to Bubble Sort?",
    answer: "Quadratic Time"
  },
  {
    topic: "Maths",
    question: "Which sorting algorithm is 'divide & conquer' and returns an array?",
    answer: "Merge Sort"
  },
  {
    topic: "Maths",
    question: "Which algorithm is 'divide & conquer', divides equally and returns an index?",
    answer: "Binary Search"
  },
  {
    topic: "Maths",
    question: "Which algorithm is 'divide & conquer', divides unequally and returns an index?",
    answer: "Fibonacci Search"
  },
  {
    topic: "Maths",
    question: "Which sorting algorithm relies on a pivot?",
    answer: "Quicksort"
  },
  {
    topic: "Maths",
    question: "Which is usually the slowest sorting algorithm?",
    answer: "Bubble Sort"
  },
  {
    topic: "Maths",
    question: "What is the BigO of Merge Sort?",
    answer: "O(n*logn)"
  },
  {
    topic: "Maths",
    question: "What is a LIFO list?",
    answer: "Stack"
  },
  {
    topic: "Maths",
    question: "In a pushdown stack, which 2 operations are allowed?",
    answer: "Push and Pop"
  },
  {
    topic: "Maths",
    question: "What is a FIFO list?",
    answer: "Queue"
  },
  {
    topic: "Maths",
    question: "Which 2 operations are allowed in a queue?",
    answer: "Enqueue and Dequeue"
  },
  {
    topic: "Maths",
    question: "Which sorting algorithm compares every adjacent pair?",
    answer: "Bubble Sort"
  },

  {
    topic: "Timeline",
    question: "When was React Native launched?",
    answer: "2015"
  },
  {
    topic: "People",
    question: "Who was the original author of React?",
    answer: "Jordan Walke"
  },
  {
    topic: "People",
    question: "Who were the original authors of Redux?",
    answer: "Dan Abramov and Andrew Clark"
  },
]

db.questions.insertMany(questions);
db.questions.find();
