// Object literals

let user = {
    // name: is a key, "John" is a value
    // key: value pairs
name: "Sid",
age: 30,
email: 'email@email.com',
location: 'London',
blogs: ['why mac & cheese rules', '10 things to make with marmite'],
login: function(){
    console.log('the user logged in');
},
logout: function(){
    console.log('the user logged out');
},
logBlogs: function(){
    // console.log(this.blogs);
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
        console.log(blog);
    })
}
};

user.logBlogs();
console.log(this);

user.login();
user.logout();

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['name']);
console.log(user['email']);
console.log(user['location']);

user['name'] = 'Chun-Li';
console.log(user['name']);

// type of shows the type of data
console.log(typeof user);

user.login();

let nameNew = 'Sid'; // Changed const to let to allow reassignment
nameNew = nameNew.toUpperCase(); // Store the result of toUpperCase() back to nameNew
console.log(nameNew);

// arrays
// arrays are objects
// arrays are a special type of object
// arrays are a collection of data

const blogs = [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];
console.log(blogs);

// Math object
// shows a list of math methods
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); // rounds to nearest integer
console.log(Math.floor(area)); // rounds down to nearest integer
console.log(Math.ceil(area)); // rounds up to nearest integer
console.log(Math.trunc(area)); // removes decimal points