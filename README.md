### Some Question and Answers

---

## 1. What are some differences between **interfaces** and **types** in TypeScript?

**Answer:** Interfaces and types are both used to define shapes of objects or values in TypeScript, but they have some key differences between them:

 - Interfaces support declaration merging, while types do not.
 - Interfaces can be extended with other Interfaces using **extends**, making them great for object-oriented patterns. Types can use intersections (**&**) for similar effects but are more flexible for unions.
 - Types can define primitives, unions, intersections, and tuples more easily. But interfaces are mainly for object shapes but can also describe functions/classes.

**Examples**:
```typescript
/*
  here you can see, I've declared two interfaces with the same name. eventually they are not two individual interfaces anymore, rather typescript automatically merge them together and convert them into one interface like this:

    interface{
       name:string;
       age:number
    }

*/
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = { name: 'Alice', age: 30 }; 

/*
    But in this case, typescript will show duplicate error
*/
type Point = { x: number };
type Point = { y: number };  
```

---

## 2. What is the use of the **keyof** keyword in TypeScript? Provide an example.

**Answer:** The **keyof** keyword creates a new type using only key values from an object. It's useful for type-safe access to object properties, like in generics or mapped types, to ensure you're only using valid keys.

**Example:**
```typescript
interface Person {
  name: string;
  age: number;
  city: string;
}

/*
    objects has two properties: * key and * value;
    using keyof operator mainly takes all of the keys from that object and creates a type using union with those keys
*/
type PersonKeys = keyof Person;  // this line creates another union type like: 'name' | 'age' | 'city'

function getProperty(person: Person, key: PersonKeys) {
  return person[key]; 
}

const alice = { name: 'Alice', age: 30, city: 'NY' };
console.log(getProperty(alice, 'age'));  // 30
// getProperty(alice, 'unknown');  // compile error
```

## 3. Explain the difference between** any**, **unknown**, and **never** types in TypeScript.

**Answer:**
  - **any:** Disables type checking completely. Any kind of value can be assigned to it, and access any properties without errors. This is more likely plain js, we should avoid using it if it's not necessary.
  - **unknown:** Safer alternative to any. Still any kind of value can be assigned, but must need to narrow the type (e.g., via type guards) before using it.
  - **never:** Represents values that will never appear.

**Examples:**
```typescript
/*
    any lets us assign any kind of value to a variable, which may lead to type errors in a large project
*/
let a: any = 5;
a = 'string';  // ok, no checks
console.log(a.unknownProp);  // ok, but risky

/*
    when using unknown, we can assign any kind of value, but when we need to use them, we need to specifically declare the type.
*/
let u: unknown = 5;
// console.log(u.length);  // Error: Must narrow first
if (typeof u === 'string') console.log(u.length);  // OK after check

/*
    never is used only when we know that any method wont return anything or even in checking that any specific array or object won't contain any specific type or kind of data.
*/
function error(msg: string): never {
  throw new Error(msg);  // Never returns
}
```

## 4. What is the use of **enums** in TypeScript? Provide an example of a numeric and string enum.

**Answer:** Enums define a set of named constants, making code more readable and type-safe (e.g., for statuses or options). They can be numeric (auto-incrementing) or string-based. But it's not supported in strip only mode.

 - Numeric Enum Example:
 ```typescript
 enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

function move(dir: Direction) {
  console.log(dir);  // e.g., 0 for Up
}
move(Direction.Up);  // OK
```
- String Enum Example:
```typescript
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

function paint(color: Color) {
  console.log(color);  // e.g., 'RED'
}
paint(Color.Red);  // OK
```

## 5. Provide an example of using **union** and **intersection** types in TypeScript.

**Example:** 
```typescript
// union
/*
    union (|) lets us assign multiple kinds of type in a single type declaration
*/
type ID = string | number;
let userId: ID = 'abc123';  // OK
userId = 456;  // OK

// intersection
/*
    intersection is mainly combining two or multiple interfaces or types to create a combined type
*/
interface HasName { name: string; }
interface HasAge { age: number; }
type Person = HasName & HasAge;

const bob: Person = { name: 'Bob', age: 40 };  // OK
// const incomplete: Person = { name: 'Bob' };  // Error: Missing age
```