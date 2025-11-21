// union ,literal type ,type alias
var user1 = {
    name: "omar",
    age: 24,
    skills: ["react", 'node']
};
function great(user1) {
    return "I am ".concat(user1.name, ". My age is ").concat(user1.age, " and my skills are ").concat(user1.skills);
}
// const result = great(use1)
great(user1);
