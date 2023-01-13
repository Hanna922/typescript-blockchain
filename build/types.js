// practice typescript file
// function playerMaker(name: string) : Player {
//   return {
//     name
//   };
// }
const playerMaker = (name) => ({ name });
const nico = playerMaker("nico");
nico.age = 12;
// #2.3
const player = ["nico", 1, true];
// #2.4
let a;
if (typeof a === "number") {
    let b = a + 1;
}
if (typeof a === "string") {
    let b = a.toUpperCase();
}
// => react.js 사용 시 props로 함수를 보내게 되면, TS에게 설명해줘야 함
const add1 = (a, b) => a + b;
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path);
    }
};
const add2 = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
const superPrint = (arr) => arr[0];
const b = superPrint([1, 2, 3, 4]);
const c = superPrint([1, 2, true, false, "hello"]);
// #3.4 Generics Recap
function superPrint2(a) {
    // #3.2의 두 줄과 동일
    return a[0];
}
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term) {
        return this.words[term];
    }
    delete(word) {
        if (this.words[word.term] !== undefined) {
            delete this.words[word.term];
        }
    }
    update(word) {
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
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
