var person = {
    name: "Rick",
    age: 70,
    friends: {
        Name: "Morty",
        age: 55,
        address: {
            street: "your couch",
            city: "your living room"
        },
        likesBeer: "Yes",
        hasAcar: {
            car: "yes",
            type: "Honda",
            doors: "four"
        }

    },
        Name: "Sue",
        age: 63,
        address: {
            street: "spare room",
            city: "you have a big house"
        },
        likesBeer: "no",
        hasAcar: {
            car: "no",
            type: "",
            doors: ""
        },
        Name: "Bob",
        age: 85,
        address: {
            street: "the other spare room",
            city: "how many rooms you got"
        },
        likesBeer: "Yes",
        hasAcar: {
            car: "yes",
            type: "Ford",
            doors: "four"
        },
        Name: "Joe",
        age: 55,
        address: {
            street: "your couch",
            city: "your living room"
        },
        likesBeer: "Yes",
    address: {
        street: "123 street",
        city: "Somewhere"
    },
    likesBeer: "Yes",
    pets: ["dog", "cat", "hamster", "falcon"]
}
person.friends.Name = "Sam";
person['sex'] = "";
person.pets.push("rabbit", "cow", "chicken");
alert("Hello Chris!!");
console.log(person.pets);
console.log(person.friends)
