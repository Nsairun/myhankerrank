function gradingStudents(grades) {
    let roundedGrades = [];
    for (let grade of grades) {
      if (grade < 38) {
        roundedGrades.push(grade);
      } else {
        let nextMultiple = Math.ceil(grade / 5) * 5;
        if (nextMultiple - grade < 3) {
          roundedGrades.push(nextMultiple);
        } else {
          roundedGrades.push(grade);
        }
      }
    }
    console.log (roundedGrades);
  }