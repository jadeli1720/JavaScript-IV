// CODE here for your Lambda Classes

class Person { //parent
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person { //child
    constructor(instructAttrs) {
        super(instructAttrs)
        this.specialty = instructAttrs.specialty
        this.favLanguage = instructAttrs.favLanguage
        this.catchPhrase = instructAttrs.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studAttrs) {
        this.previousBackground = studAttrs.previousBackground
        this.className = studAttrs.className
        this.favSubjects = studAttrs.favSubjects
    }
}



// const Austin = new ProjectManager({
//     name: 'Austin',
//     age: '23',
//     gradClassName: 'WEB18',
//     favInstructor: 'Josh knell',
//     location: 'Somewhere',
//     specialty: 'Java',
//     favLanguage: 'Java',
//     catchPhrase: ":eggplant:",
// });

// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });

// const dan = new Instructor({
//     name: 'Dan',
//     age: Infinity,
//     location: 'Denver',
//     specialty: 'Relentless Debugger',
//     favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia', 
//     catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
// });

// const kevin = new Student({
//     name: "Kevin",
//     age: 28,
//     location: "California",
//     previousBackground: "Table Games Dealer",
//     className: "WEB21",
//     favSubjects: ["Html", "CSS", "JavaScript"]
//   });

//   const nisa = new Student({
//     name: 'Nisa',
//     age: 25,
//     location: 'Ohio',
//     previousBackground: 'Debt Collector',
//     className: 'Web21',
//     favSubjects: ['Html', 'CSS', 'JavaScript'],
// });

// const joscelyn = new Student({
//     name: "Joscelyn",
//     age: 29,
//     location: "California",
//     previousBackground: "English teacher",
//     className: "WEB21",
//     favSubjects: ["computer science", "philosophy", "English"]
//   });
