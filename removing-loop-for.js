const users = [
    {
        name: "Ana Silva",
        age: 28,
        gender: "F",
        state: "SP",
        interests: ["Reading", "Travel", "Technology"]
    },
    {
        name: "Carlos Souza",
        age: 35,
        gender: "M",
        state: "RJ",
        interests: ["Soccer", "Music", "Movies"]
    },
    {
        name: "Mariana Oliveira",
        age: 22,
        gender: "F",
        state: "MG",
        interests: ["Fashion", "Social Media", "Photography"]
    },
    {
        name: "João Pereira",
        age: 40,
        gender: "M",
        state: "RS",
        interests: ["Cooking", "Fishing", "TV Series"]
    },
    {
        name: "Lucas Santos",
        age: 31,
        gender: "M",
        state: "BA",
        interests: ["Programming", "Gaming", "Fitness"]
    }
];
let genderObj = users.reduce((gender, user) => {
    user.gender === 'M' ? gender['M'] += 1 : gender['F'] += 1;
    return gender;
}, { M: 0, F: 0 });

console.log(genderObj);