const jokeObject = {
      "id": "1DQZDY0gVnb",
      "joke": "What is a centipedes's favorite Beatle song?  I want to hold your hand, hand, hand, hand..."
}

const postData = async (jokeObj) => {
  const response = await fetch(`https://httpbin.org/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeobj)
  });

  // const url = `https://icanhazdadjoke.com/`;

  // const response = await fetch(url);

  const jsonResponse = await response.json();

  console.log(jsonResponse);

  // const userEmailArray = jsonJokeData.map(user => {
  //     return user.email;
  // });

  // postToWebPage(userEmailArray);
};

// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

postData(jokeObject);
