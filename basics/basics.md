# How Fetch Works

=> fetch() is a method that only requires one argument, which is the URL or file path that we want to make the request to. It returns a promise that resolves to a Response object. The Response object contains the response from the server.

=> As fetch returns a promise so we can use .then syntax 


# 1 . Basic request to local json file
  
     fetch('./movies.json')
  .then(response => {
    console.log(response);
  });

  in response it returns us a "Response" object with different info and  things and stuffs
  like :
            status : 200
            statusText: OK
            ok: true
  so for data (json data) we've to use json() method on first .then and get recieved in second .then 

  we recieved in this case an array of Objects ...


  # 2 fetch request to github api

  fetch('https://api.github.com/users/Aqil321821')
  .then(response=> response.json())
  .then((data)=>console.log(data))


in reposnse we've an object of my details .....



            