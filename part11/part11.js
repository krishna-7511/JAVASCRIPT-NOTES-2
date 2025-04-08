// CallStack
function hello() {
    console.log("Hello");
  }
  
  hello();
  
  function one() {
    return 1;
  }
  
  function two() {
    return one() + one();
  }
  
  function three() {
    let ans = two() + one();
    console.log(ans);
  }
  
  three();
  
  // Single threads
  // Single threaded processes contain the execution of instructions in a single sequence
  let str = setTimeout(() => {
    console.log("Apna College");
  }, 2000);
  
  console.log("Helloooo...");
  
  // Callback Hell
  let h1 = document.querySelector("h1");
  function changeColor(color, delay) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
  }
  
  // newly call data after .then or Promises
  changeColor("red",1000)
  .then(()=>{
    console.log("red color was completed");
    return changeColor('yellow',1000);
  })
  .then(()=>{
    console.log('yellow color was completed');
    return changeColor('green',1000);
  })
  .then(()=>{
    console.log("green was completed");
  })
  
  
  // Previous call data
  // changeColor("red", 1000, () => {
  //   changeColor("orange", 1000, () => {
  //     changeColor("green", 1000);
  //   });
  // });
  
  // Promises
  // function saveDB(data,sucess,failure){
  //     let internetSpeed = Math.floor(Math.random()*10)+1;
  //     if(internetSpeed > 4){
  //         sucess();
  //     }
  //     else{
  //         failure();
  //     }
  // }
  
  // saveDB("apna college",()=>{
  //     console.log("your data was saved");
  //     saveDB("prajwal",()=>{
  //         console.log('your data2 saved');
  //     },()=>{
  //         console.log('weak connection, data2 not saved');
  //     })
  // },()=>{
  //     console.log("weak connection. data not saved");
  // });
  
  function saveDB(data) {
    return new Promise((resolve, reject) => {
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      if (internetSpeed > 4) {
        resolve("data was saved");
      } else {
        reject("weak connection");
      }
    });
  }

  
  // Promise Chaining
  // saveDB("apna college");
  saveDB("apna college")
    .then((result) => {
      console.log("data 1: promise was resolved "+result);
      return saveDB("helloworld");
    })
    .then((result)=>{
      console.log("data 2: promise was resolved "+result);
      return saveDB('krishna');
    })
    .then((result)=>{
      console.log("data 3: promise was resolved "+result);
    })
    .catch((result) => {
      console.log("promise was rejected s"+result);
    });

    //another method for promise chaining multiple methods chatgpt

    const getUser = () = > {
      return new Promise((resolve, reject) = > {
          setTimeout(() = > {
              resolve({ userId: 1, username : "alice" });
          }, 1000);
      });
  };
  
  const getUserPosts = user = > {
      return new Promise((resolve, reject) = > {
          setTimeout(() = > {
              resolve(["Post 1", "Post 2", "Post 3"]);
          }, 1000);
      });
  };
  
  const getPostDetails = posts = > {
      return new Promise((resolve, reject) = > {
          setTimeout(() = > {
              resolve(posts.map(post = > `${post} - Details`));
      }, 1000);
  });
      };
  
      // Chaining with arrow functions
      getUser()
          .then(user = > {
          console.log("User:", user);
          return getUserPosts("user");
      })
          .then(posts = > {
          console.log("Posts:", posts);
          return getPostDetails(posts);
      })
          .then(details = > {
          console.log("Post Details:", details);
      })
          .catch (error = > {
          console.error("Error:", error);
      });
  



  //  then and catch:
  let promise = new Promise((resolve, reject) => {
    reject("Error!");
});

