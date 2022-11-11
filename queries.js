/*Find all the topics and tasks which are thought in the month of October*/

db.topics.find(
  {
    date: {
      $gte: ISODate("2020-10-01T00:00:00.000Z"),
      $lte: ISODate("2020-10-31T00:00:00.000Z"),
    }
  },
  {
    topic_id: 1,
    topic_name: 1,
    date: 1,
  }
)


/*Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020*/

db.company_drives.find(
  {
    interviewdate: {
      $gte: ISODate("2020-10-15T00:00:00.000Z"),
      $lte: ISODate("2020-10-31T00:00:00.000Z"),
    }
  },
  {
    company_name: 1,
    interview_date: 1,
  }
)



/*Find all the company drives and students who are appeared for the placement*/

db.company_drives.find( {}, { company_name: 1, interview_date: 1, student_id_list: 1 } )


/*Find the number of problems solved by the user in codekata*/

db.users.aggregate([
  {
    $project: {
      user_name: 1,
      email_id: 1,
      batch_no: 1,
      total_no_of_problems_solved: {
        $sum: "$codekata_solved",
      }
    }
  }
])



/*Find all the mentors with who has the mentee's count more than 15*/

db.mentors.find( { no_of_student: { $gt: 15 } },
  {
    mentor_name: 1,
    email_id: 1,
  })


/*Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020*/

db.attendance.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-10-15T00:00:00.000Z"),
        $lte: ISODate("2020-10-31T00:00:00.000Z"),
      }
    }
  },
  {
    $project: {
      topic_id: 1,
      date: 1,
      no_of_users_absent: {
        $size: "$absent"
      }
    }
  }
])
