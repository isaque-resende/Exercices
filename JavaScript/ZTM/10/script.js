var database = [
  {
    username: "Isaque",
    password: "123",
  },
  {
    username: "Carol",
    password: "senha",
  },
  {
    username: "Jude",
    password: "777",
  },
];

var newsFeed = [
  {
    username: "João",
    timeline: "This is the rhythm",
  },
  {
    username: "Carla",
    timeline: "To the left, to the left",
  },
  {
    username: "Andressa",
    timeline: "We are the champions",
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("sorry, wrong username and password");
  }
}

// if (user === database[0].username &&
//     pass === database[0].password) {
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong username or password!");
//     }
// }

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
