const myObj ={
    js : 'javascript',
    php : 'php',
    python : 'python',
    csharp : 'csharp',
    java : 'java'
}
for (let key in myObj) {
    console.log(`${key} => ${myObj[key]}`);
}