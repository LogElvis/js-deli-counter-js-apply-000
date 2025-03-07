function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, "+name+". You are number "+(katzDeliLine.length)+" in line.");
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " +katzDeliLine.shift() +".";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } 
  var text = "The line is currently:";
  var comma = "";
    for(var i = 0; i < katzDeliLine.length; i++){
      text += comma +" "+(i+1) + ". " + katzDeliLine[i];
      comma = ",";
    }
    return text;
}