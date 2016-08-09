# TypeScript_guide
- Install 
- [Types](./types.ts)
- [Interfaces](./interfaces)
- Classes
- Modules
- Functions
- Generics

---

## TypeScript Handbook and Playground

[http://www.typescriptlang.org/Handbook](http://www.typescriptlang.org/Handbook)

[http://www.typescriptlang.org/Playground](http://www.typescriptlang.org/Playground)

---

## Installation

1- Install **Node.js** :

- PC: [https://nodejs.org/](https://nodejs.org/)

- Mac: recommend using  [Homebrew](http://brew.sh/) to install Node. using [Homebrew](http://brew.sh/) to install node on Mac, will ensure that Node is install with the correct permissions. Common Node errors on Mac, are often because of Node didn't install using [Homebrew](http://brew.sh/).

2- Install **TypeScript** :
- PC: ```npm install -g typescript```
- Mac: ```sudo npm install -g typescript``` 

###### TypeScript Compiler:
- After install in terminal type: ```tsc``` 
it will show typescript compiler list arguments.

- for compile a typescript file : ```tsc  filename.ts```
it will create a javascript file.

- compile multiple file in one file : ```tsc  file1.ts file2.ts --out  mainfile.js```

- to determine compile a file to which version of javascript: ```tsc  filename.ts  --target  es5```

---

## Types

- Number
- String
- Boolean : true, false, undefined and null.
- Array
- Enum    : is a collection of strings
- Void    :Absence of any type, mutly used for function return signatures
- Any     : can be anything (Not recommended)

---

## Interfaces :

- Defines a “shape” for JavaScript objects, functions and more.

- Think of it like a coin-sorting machine. At compile time, TypeScript will make sure any objects defined as that type fit exactly

- Creates a contract for code


**we have diffrent interfaces:**
> - [Object Interface](./interfaces/object-Interface.ts)
> - [Function Interface](./interfaces/object-function.ts)
> - [Array Interface](./interfaces/array-Interface.ts)
> - [Class Interface](./interfaces/class-Interface.ts)
> - [Extending Interfaces](./interfaces/extending-Interface.ts)
> - [Hybrid Interfaces](./interfaces/extending-Interface.ts)


---
