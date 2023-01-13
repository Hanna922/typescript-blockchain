// practice typescript file

type Age = number;
type Player = {
  readonly name: string;
  age?: Age;
};

// function playerMaker(name: string) : Player {
//   return {
//     name
//   };
// }

const playerMaker = (name: string): Player => ({ name });

const nico = playerMaker("nico");
nico.age = 12;

// #2.3
const player: readonly [string, number, boolean] = ["nico", 1, true];

// #2.4
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}

// #3.0
type Add1 = (a: number, b: number) => number; // call signatures
// => react.js 사용 시 props로 함수를 보내게 되면, TS에게 설명해줘야 함
const add1: Add1 = (a, b) => a + b;

// #3.1
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// #3.2 polymorphism
type SuperPrint = <T>(arr: T[]) => T;
const superPrint: SuperPrint = (arr) => arr[0];

const b = superPrint([1, 2, 3, 4]);
const c = superPrint([1, 2, true, false, "hello"]);

// #3.4 Generics Recap
function superPrint2<T>(a: T[]) {
  // #3.2의 두 줄과 동일
  return a[0];
}

// #4
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(word: Word) {
    if (this.words[word.term] !== undefined) {
      delete this.words[word.term];
    }
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  showAll() {
    console.log(Object.keys(this.words));
  }
  count() {
    const count = Object.keys(this.words).length;
    return count;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
