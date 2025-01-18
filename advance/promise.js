// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const prmOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, Crypto grpahy ,network
  setTimeout(() => {
    console.log("Async Task");
    resolve();
  }, 1000);
});
prmOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("2nd Promise Resolved");
});

const prmThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ userName: "Chai", email: "u@gmail.com" });
  }, 1000);
});
prmThree.then(function (user) {
  console.log(user);
});
const pmrFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Js", email: "uk@gmail.com" });
    } else {
      reject("Some thing went wrong");
    }
  }, 1000);
});
pmrFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const prmFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "TS", email: "usman@gmail.com" });
    } else {
      reject("Error: TS went wrong");
    }
  });
}, 1000);
async function consumePrmFive() {
  const response = await prmFive;
  console.log(response);
}
consumePrmFive();

async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
// getAllUser()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
