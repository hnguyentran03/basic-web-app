export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return ("hnguyent");
  } else if (query.toLowerCase().includes("name")) {
    return ("Ben");
  } else if (query.toLowerCase().includes("largest")) {
    let nums = query.split(":")[1].slice(0, -1).split(",");
    var n = nums.map(function(str) {
      return parseInt(str); });

    return Math.max(...n).toString();
  } else if (query.toLowerCase().includes("plus")) {
    let nums = query.split("is")[1].slice(0, -1).split("plus");
    var n = nums.map(function(str) {
      return parseInt(str); });
    
    let sum = 0;
    n.forEach( num => {
      sum += num;
    })
    return sum.toString();
  } else if (query.toLowerCase().includes("multiplied")) {
    let nums = query.split("is")[1].slice(0, -1).split("multiplied by");
    var n = nums.map(function(str) {
      return parseInt(str); });
    
    let prodct = 1;
    n.forEach( num => {
      prodct *= num;
    })
    return prodct.toString();
  }  else if (query.toLowerCase().includes("square and a cube")) {
    let nums = query.split(":")[1].slice(0, -1).split(",");
    var n = nums.map(function(str) {
      return parseInt(str); });

    let res = 0;
    n.forEach( num => {
      if (Number.isInteger(Math.sqrt(num)) && Number.isInteger(Math.cbrt(num))) {
        res = num;
        return;
      }
    }) 
    return res.toString();
  } else if (query.toLowerCase().includes("primes")) {
    let nums = query.split(":")[1].slice(0, -1).split(",");
    var n = nums.map(function(str) {
      return parseInt(str); });

    let isPrime = ( numb: number) => {
      for(let i = 0; i < Math.sqrt(numb); i++) {
        if (numb % i == 0) {
          return false;
        }
      }
      return true;
    }

    let res = 0;
    n.forEach( num => {
      if (isPrime(num)) {
        res = num;
        return
      }
      }
    ) 
    return res.toString();
  } else if (query.toLowerCase().includes("minus")) {
    let nums = query.split("is")[1].slice(0, -1).split("minus");
    var n = nums.map(function(str) {
      return parseInt(str); });
    
    let sum = n[0] * 2;
    n.forEach( num => {
      sum -= num;
    })

    return sum.toString();
  } else if (query.toLowerCase().includes("power")) {
    let nums = query.split("is")[1].slice(0, -1).split("to the power of");
    var n = nums.map(function(str) {
      return parseInt(str); });
    
    let res = n[0] ** n[1]

    return res.toString();
  }
  
  return "";
}