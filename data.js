//zenclass data

/*inseting users data*/

db.users.insertMany([{
     userid: 1,
     name: "Ramesh",
     mail: "rameshpro@gmail.com",
     batch_no: 36,
     codekata solved: [10,25,50]
    },
    {
     userid: 2,
     name: "Tanish",
     email: "tanishop@gmail.com",
     batch_no: 35,
     codekata solved: [10,25,50]
    },
    {
     userid: 3,
     name: "varshini",
     email: "varshinipika@gmail.com",
     batch_no: 36,
     codekata solved: [10,25,50,70,100]
    },
    {
     userid: 4,
     name: "swetha",
     email: "swethaprincess69@gmail.com",
     batch_no: 35,
     codekata solved: [75,100]
    },
    {
     userid: 5,
     name: "surya",
     email: "suryaprince@gmail.com",
     batch_no: 35,
     codekata solved: [50,100]
    },
]);

/* inserting codekata data */
db.codekata.insertMany([
    {
    problem_id: 1,
    catagory_name: "Input/Output",
    total_sums: 10
  },
  {
    problem_id: 2,
    catagory_name: "Absolute Beginners",
    total_sums: 25
  },
  {
    problem_id: 3,
    catagory_name: "Sting",
    total_sums: 50
  },
  {
    problem_id: 4,
    catagory_name: "Array",
    total_sums: 75
  },
  {
    problem_id: 5,
    catagory_name: "Numbers",
    total_sums: 100
  }
   ])
   
/* inserting attendance data */
  db.attendance.insertMany([
  {
    topic_id: 1,
    date: new Date("2020-10-16"),
    present: [1, 2, 3],
    absent: [4, 5],
  },
   {
    topic_id: 2,
    date: new Date("2020-10-18"),
    present: [1, 2, 3, 4],
    absent: [5],
  },
  {
    topic_id: 3,
    date: new Date("2020-10-21"),
    present: [1, 3, 4, 5],
    absent: [2],
  },
  {
    topic_id: 4,
    date: new Date("2020-10-24"),
    present: [1, 2, 3, 5],
    absent: [4],
  },
  {
    topic_id: 5,
    date: new Date("2020-10-27"),
    present: [1, 2, 5],
    absent: [3, 4],
  }
   ])
   
   /* inserting topic */
   db.topics.insertMany([
  {
    topic_id: 1,
    topic_name: "HTML",
    date: new Date("2020-10-16"),
  },
   {
    topic_id: 2,
    topic_name: "CSS",
    date: new Date("2020-10-18"),
  },
  {
    topic_id: 3,
    topic_name: "JavaScript",
    date: new Date("2020-10-21"),
  },
  {
    topic_id: 4,
    topic_name: "React.JS",
    date: new Date("2020-10-24"),
  },
  {
    topic_id: 5,
    topic_name: "MongoDB",
    date: new Date("2020-10-27"),
  }
   ])
   
/* inserting tasks data */
db.tasks.insertMany([
  {
    task_id: 1,
    task_name: "Create a Form in HTML",
    date: new Date("2020-10-16"),
    submitted: [1, 2, 3],
    not_submitted: [4, 5],
  },
  {
    task_id: 2,
    task_name: "Design a responsive page in CSS",
    date: new Date("2020-10-18"),
    submitted: [4, 5],
    not_submitted: [1, 2, 3],
  },
  {
    task_id: 3,
    task_name: "CRUD operation in JavaScript",
    date: new Date("2020-10-21"),
   submitted: [1, 2, 3],
    not_submitted: [4, 5],
  },
  {
    task_id: 4,
    task_name: "Create a Admin dashboard using React",
    date: new Date("2020-10-24"),
    submitted: [1, 3, 4],
    not_submitted: [2, 5],
  },
  {
    task_id: 5,
    task_name: "Create database for Zen Class using MongoDB",
    date: new Date("2020-10-27"),
    submitted: [4, 5],
    not_submitted: [1, 2, 3],
  },
]);

/* inserting company drives data */
  db.company_drives.insertMany([
  {
    id: 1,
    company_name: "Meta",
    interview_date: new Date("2020-10-05"),
    student_id_list: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    company_name: "Amazon",
    interview_date: new Date("2020-10-10"),
    student_id_list: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    company_name: "Apple",
    interview_date: new Date("2020-10-15"),
    student_id_list: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    company_name: "Netflix",
    interview_date: new Date("2020-10-20"),
    student_id_list: [16, 17, 18, 19, 20]
  },
  {
    id: 5,
    company_name: "Google",
    interview_date: new Date("2020-10-25"),
    student_id_list: [21, 22, 23, 24, 25]
  }
]);

/*inserting mentors data*/
  db.mentors.insertMany([
  {
    id: 1,
    mentor_name: "Elon Musk",
    email_id: "elonmarsking@gmail.com",
    no_of_student: 10
  },
  {
    id: 2,
    mentor_name: "Ash ketchum",
    email_id: "ashketchumchampion@gmail.com",
    no_of_student: 20
  },
  {
    id: 3,
    mentor_name: "jeff bezos",
    email_id: "jeffchadbezos@gmail.com",
    no_of_student: 25
  },
  {
    id: 4,
    mentor_name: "jack dorsey",
    email_id: "jackvisionary@gmail.com",
    no_of_student: 15
  },
  {
    id: 5,
    mentor_name: "Chris Evans",
    email_id: "captainchris@gmail.com.",
    no_of_student: 20
  }
]);