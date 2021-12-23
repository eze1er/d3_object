const raisinAlarm = function(cookie) {
  // Put your solution here

  for (const element of cookie) {
    if (!element.isArray) {
      if (element === "🍇") {
        return "Raisin alert!";
      }
    } else {
      break;
    }
  }
  return "All good!";
};
// stretch function. 

const raisinAlarmArray = function(cookies) {
  const newAlert = [];
  for (let i = 0; i < cookies.length; i++) {
    // index help us to know if we have already an alert in file from this array
    let index = 0;
    cookies[i].forEach(element => {
        if (element === "🍇") {
          if (index === 0) {
            newAlert.push("Raisin alert!");
            index = 1;
          }
        }
    });
    // when index is zero it mean we don't have any alert for this array
    if (index === 0) {
      newAlert.push("All good!");
    } 
  }
  return newAlert;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"]
  ]
));

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", " ", "🍫", "🍫", " "]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

