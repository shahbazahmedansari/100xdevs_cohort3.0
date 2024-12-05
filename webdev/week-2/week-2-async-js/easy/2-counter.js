let counter = 0;
function increaseAndPrint() {
  console.log(counter);
  counter = counter + 1;
}
setTimeout(increaseAndPrint, 1000);
