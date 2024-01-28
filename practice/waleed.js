//block scope
{
    let blockScopedVariable = 'I am block scoped';
    console.log(blockScopedVariable); // logs 'I am block scoped'
}
console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined