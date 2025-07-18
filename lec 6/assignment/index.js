const fs = require("fs");
console.log(process.argv);

const input = process.argv[2];

fs.writeFile("demo1.txt", input, function(err) {
  if(err) console.log(err);
  console.log("yippee");
  console.log(input);
});

