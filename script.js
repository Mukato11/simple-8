

//   Next and Previous Buttons

let divUsers = document.getElementById("fetch-new-info");
let btnNext = document.getElementById("add-next");
let btnPrev = document.getElementById("add-prev");
let ulUsers = document.getElementById("lists-users");
let currentPage = 1;

function getUsersInfo(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  })
    .then(function (resp) {
      console.log(resp);
      if (!resp.ok) {
        throw new Error();
      }
      return resp.json();
    })
    .then(function (mosuliInfo) {
      console.log(mosuliInfo);

      const fragment=document.createDocumentFragment();
      mosuliInfo.data.forEach((element) => {
        let liUsers = document.createElement("li");
        //liUsers.textContent = `${element.first_name} ${element.last_name}`;
        liUsers.textContent = `${element.name}`;
        fragment.appendChild(liUsers);
      });

    ulUsers.innerHTML = " "; 
    ulUsers.appendChild(fragment);  
    totalPages = mosuliInfo.total_pages;
    })
    .catch(function (error) {
      console.log(error);
    });
}

btnNext.addEventListener("click", function () {
    if (currentPage === totalPages) {
        return;
    }
  currentPage++;
  getUsersInfo(currentPage);
});

btnPrev.addEventListener ('click', function() {
currentPage --;
getUsersInfo(currentPage);
});

getUsersInfo(currentPage);





