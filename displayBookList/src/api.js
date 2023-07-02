const loadData = (bookInfo) =>{
    fetch(`https://openlibrary.org/search.json?q=${bookInfo}`)
    .then(res => res.json())
    .then(data => console.log(data));
}

loadData("javascript");