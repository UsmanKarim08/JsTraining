const lang = ['JavaScript', 'PHP', 'Python', 'Ruby', 'Java', 'C#', 'Go', 'C++', 'Swift', 'Kotlin'];

printArray = (item , index) => {
    console.log(`${index} , ${item}`);
 
}

lang.forEach(printArray);