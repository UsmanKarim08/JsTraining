let user = {
    name: "John",
    age: 30,
    isLoggedIn: true,
    getUserDetails: function () {
        console.log(`${this.name} logged in`);
    }
};
console.log(user.getUserDetails())