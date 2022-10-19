

const fetchData = async () => {
  const url = `https://jsonplaceholder.typicode.com/albums/1/photos`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const loadData = async () => {
  const data = await fetchData();
//   console.log(data);
  displayData(data);
};

const albumListDetails = document.getElementById("albumListDetails");

const clearContent = () => {
  albumListDetails.textContent = "";
};

loadData();


const displayData = (albums) => {
  const albumList = document.getElementById("albumList");
  // console.log(albums);
  albums.forEach((album) => {
    // console.log(album.id);
    const div = document.createElement("div");
    div.classList.add("col");
    // console.log(album);
    div.innerHTML = `
            <div onclick="displayAlbumDetails(${album.id})" class="card h-100" style="cursor: pointer;">
                <img src="${album.thumbnailUrl}" class="card-img-top" alt="albumImage">
            </div>
        `;
    albumList.append(div);
  });
};

const displayAlbumDetails = async (albumID) => {
  clearContent();
  const albums = await fetchData();

  const album = albums.find(album => album.id === albumID);
//   console.log(album);
//   console.log(albums);
  albumListDetails.innerHTML = `
        <div class="card">
            <img src="${album.url}" class="card-img-top" alt="imageDetails">
            <div class="card-body">
                <h5 class="card-title">${album.id}</h5>
                <p class="card-text">${album.title}</p>
            </div>
        </div>
    `;
};
