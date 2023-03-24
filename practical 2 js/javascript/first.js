// get method
let isEdit = false;
const APP_ID = "63ff2d8cea8aa2b09400c9f4";
function getuser() {
  config = {
    method: "GET",
    url: "https://dummyapi.io/data/v1/user",
    headers: {
      "app-id": APP_ID,
    },
  };
  axios(config)
    .then((res) => {
      console.log(res.data.data);
      let output = document.getElementById("userdata");
      res.data.data.forEach((element) => {
        let id = element.id;
        output.innerHTML += `
        <tr id="${id}" class="rows">
        <td ><img class="img-section" src=${element.picture}></td>
        <td>${element.firstName}</td>
        <td>${element.lastName} </td>
        <td><img id="img" class="click" src="/image/delete.png" onclick="deletedata('${id}')"</td>
        <td> <img src="/image/edit.png" id="editbtn" class="click" onclick="updatedata('${id}')"></td></tr>
        `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
getuser();

// delete method

function deletedata(id) {
  console.log("button clicked");
  config = {
    method: "DELETE",
    url: `https://dummyapi.io/data/v1/user/${id}`,
    headers: {
      "app-id": APP_ID,
    },
  };

  axios(config)
    .then((res) => {
      console.log(res.data);
      confirm("Are you sure to delete?");
      document.getElementById(id).remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

// post method

document.getElementById("submit").addEventListener("click", addData);

function addData(e) {
  if (isEdit) {
    // put
    let id = isEdit;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let avatar = document.getElementById("picture").value;
    var name = /^[A-Z]+([a-z]){1,}$/;
    var link = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g;
    if (firstName.match(name) && lastName.match(name)) {
    } else {
      alert("please enter a first letter is uppercase");
      return;
    }
    if (avatar.match(link)) {
    } else {
      alert("please enter a valid url");
      return;
    }
    editApiCall(id, firstName, lastName, avatar);
  } else {
    // post
    e.preventDefault();
    console.log("btn clicked");
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let picture = document.getElementById("picture").value;

    var name = /^[A-Z]+([a-z]){1,}$/;
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var link = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g;
    if (
      firstName.trim() == "" ||
      lastName.trim() == "" ||
      email.trim() == "" ||
      picture.trim() == ""
    ) {
      alert("Please Fill all details");
      return;
    }
    if (firstName.match(name) && lastName.match(name)) {
    } else {
      alert("please enter a first letter is uppercase");
      return;
    }

    if (email.match(regex)) {
    } else {
      alert("enter a valid email");
      return;
    }

    if (picture.match(link)) {
    } else {
      alert("please enter a valid url");
      return;
    }

    const config = {
      method: "POST",
      url: "https://dummyapi.io/data/v1/user/create",
      headers: {
        "app-id": APP_ID,
        "content-type": "application/json",
      },
      data: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        picture: picture,
      }),
    };
    axios(config).then((res) => {
      console.log(res.data);
      let id = res.data.id;
      let output = document.getElementById("userdata");
      output.innerHTML += `
     <tr id="${id}" class="rows">
     <td> <img src=${picture}  /></td>
     <td>${firstName} </td>
     <td>${lastName} </td>
     <td><img id="img" class="click" src="/image/delete.png" onclick="deletedata('${id}')"</td>
     <td><img src="/image/edit.png" id="editbtn" class="click" onclick="updatedata('${id}')"></td></tr>
     `;
      let clear = document.getElementsByClassName("name");
      for (e of clear) {
        e.value = "";
      }
    });
  }
}

// put method

function updatedata(id) {
  /*let blur = document.getElementById("blur");
  blur.classList.toggle("active")
  let popup = document.getElementById('form')
  popup.classList.toggle('active') */
  document.getElementById("form").style.display = "block";
  document.getElementById("table").style.marginRight = "320px";
  document.getElementById("text").innerHTML = "User Data";
  document.getElementById("addbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";

  let result = document.getElementById(id);
  console.log(result);
  let picture = result.firstElementChild.firstElementChild.getAttribute("src");
  console.log(picture);
  let firstName =
    document.getElementById(id).firstElementChild.nextElementSibling.innerHTML;
  console.log(firstName);
  let lastName =
    document.getElementById(id).firstElementChild.nextElementSibling
      .nextElementSibling.innerHTML;
  console.log(lastName);

  //  document.getElementById("fname").setAttribute("value", firstName)
  //  document.getElementById("lname").setAttribute("value", lastName)
  //  document.getElementById("picture").setAttribute("value", picture)
  document.getElementById("fname").value = firstName;
  document.getElementById("lname").value = lastName;
  document.getElementById("picture").value = picture;
  document.getElementById("email").style.display = "none";
  document.getElementById("email2").style.display = "none";
  document.getElementById("br").style.display = "none";
  document.getElementById("br1").style.display = "none";
  isEdit = id;
}
function editApiCall(id, firstName, lastName, picture) {
  const data = { firstName, lastName, picture };

  const config = {
    method: "PUT",
    url: `https://dummyapi.io/data/v1/user/${id}`,
    headers: {
      "app-id": "63ff2d8cea8aa2b09400c9f4",
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  };

  axios(config).then((res) => {
    console.log(res.data);
  });
  
  document.getElementById("form").style.display = "none";
  document.getElementById("table").style.marginRight = "0px";
}
document.getElementById("addbtn").addEventListener("click", changedata);

function changedata() {
  /* let blur = document.getElementById("blur");
 blur.classList.toggle("active")
 let popup = document.getElementById("form")
 popup.classList.toggle('active') */
  document.getElementById("form").style.display = "block";
  document.getElementById("table").style.marginRight = "320px";
  document.getElementById("text").innerHTML = "Add User";
  document.getElementById("addbtn").style.display = "none";
  document.getElementById("closebtn").style.display = "block";
  document.getElementById("email").style.display = "inline-block";
  document.getElementById("email2").style.display = "inline-block";
  let clear = document.getElementsByClassName("name");
  document.getElementById("br").style.display = "block";
  document.getElementById("br1").style.display = "block";

  for (e of clear) {
    e.value = "";
  }
  isEdit = null;
}

document.getElementById("closebtn").addEventListener("click", () => {
  /* let blur = document.getElementById("blur");
 blur.classList.toggle("active")
 let popup = document.getElementById('form')
  popup.classList.toggle('active') */
  document.getElementById("addbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("form").style.display = "none";
  document.getElementById("table").style.marginRight = "0px";
});
