
//1.fetching a local json file

/* fetch('./movies.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data[1]);
    return data[0];
  })
  .then(movie1 => {
    console.log(movie1.title);
  });
*/

//2.fetching a local text file

/* fetch('./test.txt')
  .then(res => {
    return res.text();
  })
  .then(text => {
    console.log(text);
  }); */




//3.fetch data from an api


fetch('https://api.github.com/users/Aqil321821')
  .then(response=> response.json())
  .then((data)=>console.log(data))


