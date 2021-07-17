class Person {
    constructor(data) {
        this.data = data;

    }
    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname} `);
    }

    intro() {
        console.log(`Hi, my is ${this.data.firstname} and I am ${this.data.age} years old.`);
    }

    firstChild() {
        const childFirst = this.data.children[0];
        //console.log(this.data.children[0]);
        console.log(`${childFirst.firstname} (${childFirst.age}) `);
    }
    lastChild() {
        //const childLast = ;
        console.log(this.data.children.length);
        //console.log(`${childLast.firstname} (${childLast.age}) `);

    }
}

module.exports = Person;