const displayData = (books, totalCount) =>{
    console.log(totalCount);
    books.forEach(book => {
        console.log(
          book.cover_i,
          book.title,
          book.subtitle,
          book.author_name,
          book.first_publish_year
        );
    });
    
}

const loadData = (bookInfo) =>{
    fetch(`https://openlibrary.org/search.json?q=${bookInfo}`)
      .then((res) => res.json())
      .then((data) => displayData(data.docs, data.numFound));
}

loadData("javascript");