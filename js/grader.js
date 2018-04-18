function gradeResult() {
	
  /* Don't forget to add comments to your javascript files
     this is a multi-line comment.
	 
	 Results grader by Eamon Walsh, March 2017
	 
	 Find out more about logical operators (used on line 21, 51 and 71) see https://www.w3schools.com/js/js_comparisons.asp
	 
	 This example is just one possible solution. There are other solutions and some are better.
	 Can you think of a better solution?
	 How about creating another function to calculate the grades e.g. gradeIt() ? 
	 
	*/

  //Setup three variables, one for each input field
  var myEnglishResult = parseInt(document.getElementById("value-english").value);
  var myIrishResult = parseInt(document.getElementById("value-irish").value);
  var myMathsResult = parseInt(document.getElementById("value-maths").value);
  
  var englishGrade, irishGrade, mathsGrade; //Setup three variables for the grade

  //First check if the user has entered a number
  if (!myEnglishResult)
      alert("Please enter your English result");
  else if (myEnglishResult < 0 || myEnglishResult > 100) //Check if result valid - hint use logical OR ||
	  alert("Please enter a result between 0 and 100");
  else if (myEnglishResult >= 90)
        englishGrade = 'A';
  else if (myEnglishResult >= 80)
        englishGrade = 'B';
  else if (myEnglishResult >= 70)
        englishGrade = 'B-';
  else if (myEnglishResult >= 60)
        englishGrade = 'C';
  else if (myEnglishResult >= 50)
        englishGrade = 'C-';
  else if (myEnglishResult >= 40)
        englishGrade = 'D';
  else if (myEnglishResult < 40)
        englishGrade = 'F';
  
  /*Note these if statements just have one command to run - assign the grade.
    Therefore we don't need to use the {} curly brackets.
	An if statement with multiple lines must have them e.g.
	
	if (myEnglishResult >= 70) {
        englishGrade = 'B-';
		console.log(englishGrade);
	}
  */
  
  //First check if the user has entered a number
  if (!myIrishResult)
      alert("Please enter your Irish result");
  else if (myIrishResult < 0 || myIrishResult > 100) //Check if result valid - hint use logical OR ||
	  alert("Please enter a result between 0 and 100");
  else if (myIrishResult >= 90)
        irishGrade = 'A';
  else if (myIrishResult >= 80)
        irishGrade = 'B';
  else if (myIrishResult >= 70)
        irishGrade = 'B-';
  else if (myIrishResult >= 60)
        irishGrade = 'C';
  else if (myIrishResult >= 50)
        irishGrade = 'C-';
  else if (myIrishResult >= 40)
        irishGrade = 'D';
  else if (myIrishResult < 40)
        irishGrade = 'F';

  //First check if the user has entered a number
  if (!myMathsResult)
      alert("Please enter your Maths result");
  else if (myMathsResult < 0 || myMathsResult > 100) //Check if result valid - hint use logical OR ||
	  alert("Please enter a result between 0 and 100");
  else if (myMathsResult >= 90)
        mathsGrade = 'A';
  else if (myMathsResult >= 80)
        mathsGrade = 'B';
  else if (myMathsResult >= 70)
        mathsGrade = 'B-';
  else if (myMathsResult >= 60)
        mathsGrade = 'C';
  else if (myMathsResult >= 50)
        mathsGrade = 'C-';
  else if (myMathsResult >= 40)
        mathsGrade = 'D';
  else if (myMathsResult < 40)
        mathsGrade = 'F';
    
	//Only output to the HTML file if a result for that subject is entered
	
	if (myMathsResult) {
		var message3 = 'You got a ' + mathsGrade + ' in Maths!';
		document.getElementById("mathsresultsentence").innerHTML = message3;
	}
	
	if (myEnglishResult) {
		var message1 = 'You got a ' + englishGrade + ' in English!';
		document.getElementById("englishresultsentence").innerHTML = message1;
	}
	
	if (myIrishResult) {
		var message2 = 'You got a ' + irishGrade + ' in Irish!';
		document.getElementById("irishresultsentence").innerHTML = message2;
    }

}