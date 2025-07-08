function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
        return true;
    }
    else {
        console.log("not allowed to drive");
        return false;
    }
}
var tom = {
    name: "Tom",
    age: 25 // Tom is 15 years old
};
canDrive(tom); // Output: "not allowed to drive"   
