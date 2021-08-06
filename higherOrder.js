const companies = [
    {
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2003
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    }, {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    }, {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    }, {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    }, {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    }, {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
]

const ages = [
    33,
    12,
    20,
    16,
    5,
    54,
    21,
    44,
    61,
    13,
    15,
    45,
    25,
    64,
    32
];

// forEach
companies.forEach(function(company){
    console.log(company.category)
});

companies.forEach(company => console.log(company.category));

// Filter

const filteredAges1 = ages.filter(function(age){
    if(age < 15){
        return true;
    }
});
const filteredAges2 = ages.filter(age => age < 20)
console.log(filteredAges2);

const retailCompanies = companies.filter(function(company){
    if(company.category === "Retail"){
        return true;
    }
});
const financeCompanies = companies.filter(company => company.category === "Finance")

console.log(financeCompanies);

// get 80s companies
const get80sCompanies = companies.filter(company => company.start < 1990 && company.start < 1990)
console.log(get80sCompanies)

//Map
//create array of company names
const companyName = 
companies.map(company => company.name);
console.log(companyName)

const doubleAges = ages
    .map(age =>age * 2)
    .map(age => Math.sqrt(age))
console.log(doubleAges)

//Sort
const sortCompanies = companies.sort(
    (a, b) => (a.start > b.start)?1:-1
);
console.log(sortCompanies)

//reduce
const sum = ages.reduce((total, age) =>
total + age,0);
console.log(sum)

//combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((total, age) => total + age,0)

console.log(combined)