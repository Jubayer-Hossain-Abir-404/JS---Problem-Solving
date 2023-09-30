const returnAuthorName = (author) => {
  return author;
};
const displayData = (books, totalCount) => {
  if (totalCount === 0) {
    displayFunc("loader", "none");
    displayFunc("noResult", "block");
  } else {
    displayFunc("noResult", "none");
    document.getElementById(
      "totalCount"
    ).innerText = `Showing ${totalCount} Items`;
    const bookItems = document.getElementById("bookItems");
    books.forEach((book) => {
      const div = document.createElement("div");
      div.classList.add(
        "w-full",
        "max-w-sm",
        "bg-white",
        "border",
        "border-gray-200",
        "rounded-lg",
        "shadow",
        "paginateItem"
      );
      div.innerHTML = `
            ${
              !book.cover_i
                ? `<h5 class="py-5 text-base text-center font-semibold tracking-tight text-gray-900 dark:text-white">No Image Available</h5>`
                : `<a href="#">
                        <img class="p-8 rounded-t-lg" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="Book Image" />
                  </a>`
            }
            
            <div class="px-5 pb-3">
                        <a href="#">
                            <h5 class="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">${
                              book.title
                            }</h5>
                        </a>
                        <div class="pt-3 flex flex-col items-center justify-between">
                        ${
                          !book.author_name
                            ? `<span class="text-center text-base font-semibold text-gray-900 dark:text-white">Author Unknown</span>`
                            : `<span class="text-center text-base font-semibold text-gray-900 dark:text-white">${book.author_name?.map(
                                returnAuthorName
                              )}</span>
                                `
                        }
                        </div>
                        
            </div>
            <h5 class="pb-3 text-base text-center font-semibold tracking-tight text-gray-900 dark:text-white">First Published - ${
              book.first_publish_year
            }</h5>
        `;
      bookItems.appendChild(div);
    });
    displayFunc("loader", "none");
  }
};

const loadData = (bookInfo) => {
  fetch(`https://openlibrary.org/search.json?q=${bookInfo}`)
    .then((res) => res.json())
    .then((data) => displayData(data.docs, data.numFound));
};

loadData("javascript");

const displayFunc = (id, displayStyle) => {
  document.getElementById(id).style.display = displayStyle;
};
const emptyContent = (ids) => {
  ids.forEach((id) => {
    document.getElementById(id).textContent = "";
  });
};
const submitSearch = () => {
  const searchBooks = document.getElementById("searchBooks").value;
  displayFunc("noResult", "none");
  displayFunc("loader", "block");
  document.getElementById("searchBooks").value = "";
  emptyContent(["bookItems", "totalCount"]);
  loadData(searchBooks);
};
