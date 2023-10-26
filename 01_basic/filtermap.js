// for each don't return anything
// filter is used to filter out the elements from an array based on a condition
// map is used to transform the elements of an array based on a condition
// reduce is used to reduce the elements of an array to a single value
// when we open scope we have to write return keyword
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const myNume = num.filter((num1) => num1 > 5)
// console.log(myNume);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const fic = books.filter((bk) => bk.publish > 2000)
  console.log(fic)
  