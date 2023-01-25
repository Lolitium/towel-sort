
// You should implement your task here.

module.exports = function towelSort (matrix) {
  resultArray=[];
  let i=0;
  let j=0;

 
  if (matrix) {
  for (i=0; i<matrix.length; i++) {

    if (i==0 || i%2==0) {
      for (elem of matrix[i]) {
        resultArray.push(elem);
      }
    }

    else if (i%2!==0) {
        matrix[i].reverse();
      for (elem of matrix[i]) {
        resultArray.push(elem);
      }  
    }
  }
   return resultArray;}
   else return [];
}

