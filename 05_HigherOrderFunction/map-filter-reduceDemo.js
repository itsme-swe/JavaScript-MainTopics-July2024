const users = [
    {
        firstName: "Harsh",
        lastname: "Mehra",
        age: 32
    },

    {
        firstName: "Vandana",
        lastname: "Mehra",
        age: 27
    },

    {
        firstName: "Gaurav",
        lastname: "Bhakuni",
        age: 34
    },

    {
        firstName: "Mukul",
        lastname: "Singh",
        age: 32
    },
]

//»» So first we'll find the first name of the users. To find first name we'll be using map function
const firstName = users.map((x) => x.firstName + " ");

console.log(firstName);     //»» [ 'Harsh ', 'Vandana ', 'Gaurav ' ]

const output = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(output);        // Output »»  { '27': 1, '32': 1, '34': 1 }

//🚀 Find the people from users list who's age is lower than 30 and give their first name.




