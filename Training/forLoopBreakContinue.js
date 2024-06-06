const myArr = ['batman','superman','spiderman'];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if(element === 'batman'){
        console.log(`Batman found`);
        break;
    }
    console.log(element);
}