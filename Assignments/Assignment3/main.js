console.log('hello');
function quiz()
{
	let score = 0;
	let num;
	let question;
  	let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
	];
	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = 0;
	for (count = 0; count < quiz_questions.length; count++)
	{
		totalQuestion++;
	}
	// console.log(totalQuestion); 
	
	//generate random number for question
	num = Math.floor(Math.random() * 3);
		// console.log("count:", count); 
		// console.log(`num variable: ${num}`); 
	for(count = 0; count < totalQuestion; count++)
	{
		// console.log("going through question ", num);
		question = quiz_questions[num];
		answer = prompt(question);
		// console.log(answer); 
		//if the answer given matches the quiz answer at num index
		// console.log("changed num?: ", num);
		if (answer == quiz_answers[num]) 
		{
			//increase the score
			score++;
			// console.log("answer:", quiz_answers[num]);
			alert("Correct!");
		}
		else 
		{
			//else gain no points
			// console.log("answer:", quiz_answers[num]);
			alert("Wrong");
		}
		num++;
		// console.log("new num:", num);
		//if at the end of questions array, set back to zero
		if (num === totalQuestion) 
		{
			num = 0;
		}
		
	}

  document.write(`<p>You got ${score} out of ${totalQuestion} questions correct.</p>`);
}