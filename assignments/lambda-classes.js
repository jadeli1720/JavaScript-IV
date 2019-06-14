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

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    grading(student, grade) {
        return `${student.name}, ${this.name} has given you a grade of ${grade}`;
    }
}

class Student extends Person { //child
    constructor(studAttrs) {
        super(studAttrs)
        this.previousBackground = studAttrs.previousBackground
        this.className = studAttrs.className
        this.favSubjects = studAttrs.favSubjects
        this.grade = studAttrs.grade
    }
    listsSubjects () {
        return `${this.favSubjects}`
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge (subject) {
        return `${this.name} has begun the sprint challenge on ${subject}`
    }
    graduate (grade) {
        if (this.grade >= 70) {
            return `Congratulations ${this.name}! Your grade is ${grade}. You have successfully graduated!`
        } else (this.grade < 70); {
            return `I am sorry ${this.name}. Your grade is only ${grade}. You will not be able to gradate`
        }
    }

}

class ProjectManager extends Instructor { //grandchild
    constructor(pmAttrs) {
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName
        this.favInstructor = pmAttrs.favInstructor
    }
    standUp(channel) {
        return `${this.name}'s announces to ${channel} @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  })

  const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: Math.floor(Math.random() * 101)
});

    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: Math.floor(Math.random() * 101)
});


  const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});





//============ Instructor Testing
// console.log(dan.name);
// console.log(dan.age);
// console.log(dan.location);
// console.log(fred.specialty);
// console.log(dan.favLanguage);
// console.log(dan.catchPhrase);
// console.log(dan.demo('JavaScript'))
// console.log(dan.grade('Jade','HTML'))
// console.log(dan.speak(dan));
console.log(dan.grading(isaiah, isaiah.grade));


// console.log(fred.name);
// console.log(fred.age);
// console.log(fred.location);
// console.log(fred.specialty);
// console.log(fred.favLanguage);
// console.log(fred.catchPhrase);
// console.log(fred.demo('PHP'))
// console.log(fred.grade('Chris','React'))
// console.log(fred.speak(fred));

//============ Student Testing

// console.log(isaiah.name);
// console.log(isaiah.age);
// console.log(isaiah.location);
// console.log(isaiah.previousBackground);
// console.log(isaiah.className);
// console.log(isaiah.favSubjects);
// console.log(isaiah.speak(isaiah));
// console.log(isaiah.listsSubjects(isaiah.listsSubjects))
// console.log(isaiah.PRAssignment('Bootstrap'))
// console.log(isaiah.sprintChallenge('Advance CSS'))
console.log(isaiah.grade)
console.log(isaiah.graduate(isaiah.grade))



// console.log(nisa.name);
// console.log(nisa.age);
// console.log(nisa.location);
// console.log(nisa.previousBackground);
// console.log(nisa.className);
// console.log(nisa.favSubjects);
// console.log(nisa.speak(nisa));
// console.log(nisa.listsSubjects(nisa.listsSubjects))
// console.log(isaiah.PRAssignment('React'))
// console.log(nisa.sprintChallenge('JavaScript III'))
console.log(nisa.grade)
console.log(nisa.graduate(nisa.grade))

//============ Manager Testing

// console.log(marguel.name);
// console.log(marguel.age);
// console.log(marguel.gradClassName);
// console.log(marguel.favInstructor);
// console.log(marguel.location);
// console.log(marguel.favLanguage);
// console.log(marguel.catchPhrase);
// console.log(marguel.standUp('Web 21'));
// console.log(marguel.debugsCode('Nisa','JavaScript II'));
// console.log(marguel.speak(marguel));
console.log(marguel.grading(nisa, nisa.grade));

// console.log(brandon.name);
// console.log(brandon.age);
// console.log(brandon.gradClassName);
// console.log(brandon.favInstructor);
// console.log(brandon.location);
// console.log(brandon.favLanguage);
// console.log(brandon.catchPhrase);
// console.log(brandon.standUp('Web 21'));
// console.log(brandon.debugsCode('Isaiah','Flexbox'));
// console.log(brandon.speak(brandon));