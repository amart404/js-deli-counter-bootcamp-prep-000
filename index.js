var ticketNum = 0;
function takeANumber(line, name) {
  line.push(`${name}`);
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}
function takeANumber2() {
  ticketNum++;
  console.log(`Welcome you are ticket number ${ticketNum}.`)
}

function nowServing(line) {
  if(line.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
    return (`Currently serving ${line.shift()}.`);
  }
}
function currentLine(line) {
  let i = 0;
  var newLine = [];
  while(i < line.length) {
    newLine.push(" " + (i+1) + ". " + line[i])
    i++;
  }
  if(line.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    return ("The line is currently:" + newLine);
  }
}
takeANumber2()
takeANumber2()