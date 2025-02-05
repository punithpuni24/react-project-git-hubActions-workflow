const fs = require('fs');
 
// JavaScript object
const user = {
  name: "Jane Doe",
  role: "Developer",
  active: true
};
 
// ✅ Convert to JSON (toJSON)
const jsonString = JSON.stringify(user, null, 2);
fs.writeFileSync('user.json', jsonString);  // Save JSON to file
console.log("✅ Data saved to user.json");
 
// ⬇️ Read JSON from file
const dataFromFile = fs.readFileSync('user.json', 'utf-8');
 
// ✅ Convert from JSON (fromJSON)
const parsedUser = JSON.parse(dataFromFile);
console.log("👤 User Info:", parsedUser);
