const promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      if(true) {
         resolve('Promise 1 Resolved');
      } else {
         reject('Promise 1 Error');
      }
   }, 5000)
 })

const promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      if(true) {
         resolve('Promise 2 Resolved');
      } else {
         reject('Promise 2 Error');
      }
   }, 5000)
})

Promise.all([promise1, promise2]);
Promise.all([promise1, promise2]).then((dataArr) => { console.log(dataArr); })