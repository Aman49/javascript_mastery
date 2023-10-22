const user = {
    userName: "Aman", 
    price: 999,
    message: function() {
        console.log(`${this.userName}, welcome to our site`);
        console.log(this);
    },
}
user.message();
user.userName = "Vikas";
user.message();
console.log(this);

