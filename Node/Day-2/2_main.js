// setTimeout(() => {
//   console.log("Hello i am global ")
// }, 2000);

let  counting = 0;
const interval = setInterval(() => {
  console.log(`Interval Count ${++counting}`);

  if(counting ===4){
    clearInterval(interval);
  }
}, 2000);
