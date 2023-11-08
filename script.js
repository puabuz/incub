// Task 1
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// #1
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }

// #2
// function likes(names) {
//     names.length === 0 && (names = ["no one"]);
//     let [a, b, c, ...others] = names;
//     switch (names.length) {
//       case 1: return `${a} likes this`;
//       case 2: return `${a} and ${b} like this`;
//       case 3: return `${a}, ${b} and ${c} like this`;
//       default: return `${a}, ${b} and ${others.length + 1} others like this`;
//     }
//   }

// #3
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }


function likes(names) {

    let str = "";

    if (names.length !== 0 && names.length !== undefined) {
        if (names.length == 1) {
            str = names[0] + ' likes this'
            return str
        }

        if (names.length == 2) {
            str = names[0] + " and " + names[1] + ' like this'
            return str
        }

        if (names.length == 3) {
            str = names[0] + ', ' + names[1] + ' and ' + names[2] + " like this"
            return str;
        }
        if (names.length > 3) {
            str = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + " others like this"
            return str;
        }
    } else {
        str = 'no one likes this'
        return str;
    }
}

//--------------Task2

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {

    let result = [];

    let percent = percent / 100;

    for (let p0; p0 < p; p0 += p0 * percent + aug) {
        currentValue = p0 + p0 * percent + aug;
        result.push(currentValue);
    }
    return result.length;
}

//------------------Task 3