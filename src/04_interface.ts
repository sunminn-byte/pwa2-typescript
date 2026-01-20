// --------------------------
interface User {
    readonly id: number;
    name: string;
    age?: number;
}

const user: User = {
    id: 1,
    name: '홍길동',
    // age: 1,
};
// user.id = 2; // readonly여서 에러남
user.name = 'test';

// --------------------------
// 인터페이스 확장
// `extends` 키워드를 사용해서 기존 인터페이스를 상속해서 확장해나가는 기법
interface Animal {
    name: string;
}
interface Human extends Animal {
    age: number;
}
interface Douner extends Animal, Human {
    kinds: string;
}
// const douner: Douner = {
//     kinds: 'ttt'; // 상속받은 name과 age 없어서 에러남
// };


// --------------------------
// 선언 병합: 동일한 이름으로 인터페이스를 다시 선언하면, 자동으로 하나로 병합
interface Dog { name: string; }
interface Dog { age: number; }
// const dog: Dog = {
//     name: '흰둥이',
//     age: 5
// }

// --------------------------
// 메소드 정의
interface Dog {
    // 함수 타입 프로퍼티 방식
    barking: (arg: Animal) => void;

    // 메소드 시그니처 방ㅅ힉
    barking2(arg: Animal): void;
}
let humanBarking = (arg: Human) => console.log(arg.name);
// const dog2: Dog = {
//     barking: humanBarking,
//     barking2: humanBarking,
// }

// --------------------------
// 메소드 오버로딩
interface Cat {
    // mya: () => void;
    // mya: (arg: string) => void;

    // 메소드 시그니처 방식으로 메소드 오버로딩 가능
    mya(): void;
    mya(arg: string): void;
}
