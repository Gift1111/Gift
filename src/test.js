function sumOfNumber(params) {
  let data = 0; // this is the initial count

  //forloop was needed so as to loop throug the array and get every single number out and add them with them with the data that was equal to 0.
  for (let index = 0; index < params.length; index++){
    data =params[index] + data;
  }
  let Answer = data
  //  console.log(Answer)
  return Answer;
}

sumofNumbers([1,23,44,4]);

  console.log(sumofNumbers([1,2,3,4,5,56,6,77,7,87,8,88]));
