/* eslint-disable no-console */
// Generate person 
const createPerson = (fn, ln, mn,bd) => ({
    firstName: fn,
    lastName: ln,
    middleName: mn,
    birthDate: bd
})

const generatePeople = () => {
    return [
        createPerson("Conor-fn", "Macgregor-ln", "Ivanovich-mn", new Date(1985, 10, 10)),
        createPerson("Habib-fn", "Nurmagamedov-ln", "Xz-mn", new Date(1986, 8, 11)),
        createPerson("Justin-fn", "Gatgi-ln", "Loose-mn", new Date(1982, 3, 10)),
        createPerson("John-fn", "Jones-ln", "Olegovich-mn", new Date(1982, 7, 10)),
        createPerson("Fedor-fn ", "Emeljanienko-ln", "Bohatyr-mn", new Date(1989, 10, 11)),
        createPerson("Tony-fn", "Ferguson-ln", "Olen-mn", new Date(1985, 7, 10)),
        createPerson("Tyson-fn", "Woodley-ln", "Pokerman-mn", new Date(1981, 7, 10)),
        createPerson("Ngalo-fn", "Uzumaki-ln", "Kakashevich-mn", new Date(1980, 2, 10)),
        createPerson("Igor-fn", "Igorev-ln", "Igorevich-mn", new Date(1990, 7, 10)),
        createPerson("Sergey-fn", "Sergeev-ln", "Sergeevich-mn", new Date(1981, 7, 10))
    ];
}


// Сортировка в лексико-графическом порядке 
// -1 - по убыванию 
// 1 - по возрастанию  ( по умолчанию )

const comparePerson = (a, b) => {
    if ( a.firstName === b.firstName) {
        if ( a.lastName === b.lastName) {
            return a.middleName <= b.middleName ? -1 : 1;
        }
         return a.lastName < b.lastName ? -1 : 1;
    }
    return a.firstName < b.firstName ? -1 : 1;
};



const sortArray = (a, compare, direction = 1) => {
    for ( let i = 0; i < a.length - 1; i += 1) {
        for ( let  j = 0; j < a.length - 1 - i; j += 1) {
            if  ( compare ( a[j],  a[j+1]  ) === direction) {
                const t = a[j];
                a[j] = a[j+1];
                a[j+1] = t;
            }

        } 
        
    }
}

const people = generatePeople();
sortArray(people, comparePerson, -1);
console.log(people);

// Найти самого молодого 
const yong = (a, b) => {
    if ( a.bd > b.bd) {
       
            return a.middleName < b.middleName ? -1 : 1;
        
    }
    return a.firstName < b.firstName ? -1 : 1;
};
const.log(young);

// Самого старого





