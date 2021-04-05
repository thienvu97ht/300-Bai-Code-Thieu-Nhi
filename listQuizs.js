export var listQuizs = [{
    id: 1,
    code: 
    `function a(x) {
        x++;
        return function () {
            console.log(++x);
        };
    }
        
    a(1)();
    a(1)();
    a(1)();
        
    let x = a(1);
    x();
    x();
    x();`,

    answerA: `A: 1, 2, 3 and 1, 2, 3`,
    answerB: `B: 3, 3, 3 and 3, 4, 5`,
    answerC: `C: 3, 3, 3 and 1, 2, 3`,
    answerD: `D: 1, 2, 3 and 3, 3, 3`,
    answer: 2
},
{
    id: 2,
    code: 
    `function Name(a, b) {
        this.a = a;
        this.b = b;
    }
      
    const me = Name("Vuong", "Nguyen");
      
    console.log(!(a.length - window.a.length));`,

    answerA: `undefined`,
    answerB: `NaN`,
    answerC: `true`,
    answerD: `false`,
    answer: 3
},
{
    id: 3,
    code: 
    `const x = function (...x) {
        let k = (typeof x).length;
        let y = () => "freetut".length;
        let z = { y: y };
      
        return k - z.y();
    };
      
    console.log(Boolean(x()));`,

    answerA: `true`,
    answerB: `1`,
    answerC: `-1`,
    answerD: `false`,
    answer: 1
}
];