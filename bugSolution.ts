function greeter(person: string): string {
  return "Hello, " + person;
}

function greetPeople(people: string[]): string[]{
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John Smith"];
console.log(greetPeople(user)); 