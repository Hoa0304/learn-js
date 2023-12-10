function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Hoa', 'Trần', 'Avatar');
var user= new User('Mẫn', 'Trần', 'Avatar');

author.title = 'con gái';
user.comment = 'trai';

console.log(author);
console.log(user);

function Animal(name, leg, speed) {
    this.name= name;
    this.leg = leg;
    this.speed = speed;
}

var parrot = new Animal('Cho', 4, '50m/s')