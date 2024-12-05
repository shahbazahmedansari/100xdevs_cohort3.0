let counter = 0;
function increaseAndPrint() {
  console.log(counter);
  counter++;
}
setInterval(increaseAndPrint, 1000);
