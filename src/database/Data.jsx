
export default [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: [
        '<javascript>',
        '<script>',
        '<js>',
        '<scripting>',
      ],
      correctAnswer: '<script>',  
    },
    {
      id: 2,
      question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      options: [
        '<script href="xx.js">',
        '<script src="xx.js">',
        '<script name="xx.js">',
      ],
      correctAnswer: '<script src="xx.js">',  
    },
    {
      id: 3,
      question: "How do you create a function in JavaScript?",
      options: [
        "function:Function()",
        "function=myFunction()",
        "function myFunction()",
      ],
      correctAnswer: "function myFunction()",  
    },
    {
      id: 4,
      question: "How do you call a function named myFunction?",
      options: [
        "call function myFunction()",
        "call myFunction()",
        "myFunction()",
      ],
      correctAnswer: "myFunction()",  
    },
    {
      id: 5,
      question: "How to write an IF statement in JavaScript?",
      options: [
        'if i=5 then',
        'if(i==5)',
        'if i=5',
        'if i==5 then',
      ],
      correctAnswer: 'if(i==5)',  
    },
    {
      id: 6,
      question: "How does a WHILE loop start?",
      options: [
        "while(i<=10)",
        "while i=1 to 10",
        "while(i<=10: i++)",
      ],
      correctAnswer: "while(i<=10)",  
    },
    {
      id: 7,
      question: 'How can you add a comment in JavaScript?',
      options: [
        '//this is a comment',
        '<!-- this is a comment -->',
        'this is a comment',
      ],
      correctAnswer: '//this is a comment',
    },
    {
      id: 8,
      question: 'JavaScript is the same as Java.',
      options: [
        "true",
        "false",
      ],
      correctAnswer: "false",  
    },
    {
      id: 9,
      question: "How can you detect the client's browser name?",
      options: [
        "browser.name",
        "navigator.appName",
        "client.navName",
      ],
      correctAnswer: "navigator.appName",  
    },
    {
      id: 10,
      question: "Which event occurs when the user clicks on an HTML element?",
      options: [
        "onmouseover",
        "onmouseclick",
        "onclick",
        "onchange",
      ],
      correctAnswer: "onclick",  
    },
  ];
  