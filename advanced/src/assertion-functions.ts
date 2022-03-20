type Person = {
  name: string,
  dateOfBirth: Date,
}

function loadPerson(): Person{
  return {name: '', dateOfBirth: new Date};
  //return { name: 'Harpreet Singh Randhawa', dateOfBirth: new Date}
}

function assert(condition: unknown, message: string): asserts condition{
  if(!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date{
  if(value instanceof Date) return;
  else throw new TypeError('value is not a Date');
}
const maybePerson = loadPerson();

assert(maybePerson != null, 'Could not load person');
console.log('Name: ', maybePerson.name);

assertDate(maybePerson.dateOfBirth);
console.log('DOB: ', maybePerson.dateOfBirth);