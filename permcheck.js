function solution(A){
  let val = 1;
  /*N must be defined here because if you simply use i<A.length in the 'for' loop, it will update A.length with the new size of the array after each iteration. */
  let N = A.length;
  for(i=1;i<=N;i++){
    if(!A.includes(i)){
      val=0;
      break;
    } else{
        A.splice(A.indexOf(i), 1);
        console.log(A);
    }
  }
  return val;
}

console.log(solution([3,2,4,1]));
console.log(solution([1,2,3,5]));
