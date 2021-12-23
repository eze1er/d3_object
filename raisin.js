const raisinAlarm = function(cookie) {
  // Put your solution here
  for (const element of cookie) {
    if (element === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", " ", "🍫", "🍫", " "]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));