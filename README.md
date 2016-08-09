# TypeScript_guide
- Install 
- Types
- Interfaces
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
