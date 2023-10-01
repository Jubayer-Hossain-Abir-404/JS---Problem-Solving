const getDadJoke = async () => {
    const response = await fetch(`https://icanhazdadjoke.com/`,{
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    // const url = `https://icanhazdadjoke.com/`;

    // const response = await fetch(url);

    const jsonJokeData = await response.json();

    console.log(jsonJokeData.joke);

    // const userEmailArray = jsonJokeData.map(user => {
    //     return user.email;
    // });

    // postToWebPage(userEmailArray);
}


// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

getDadJoke();