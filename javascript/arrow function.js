param => {
  let a = 1;
  return a + param;
}



()=> {
    let a =1;
    return a + 1;
}

(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}


const x = (...n) => {
  return { ...n };
};

const obj = x(4, 6, 7);

console.log(obj); //{ '0': 4, '1': 6, '2': 7 }