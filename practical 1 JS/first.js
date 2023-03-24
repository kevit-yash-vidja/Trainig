fetch("https://reqres.in/api/users?page=1&&per_page=15").then(
        (responce) => {
          responce.json().then((data) => {
            console.log(data)
            console.log(data.data);
            if (data.data.length > 0) {
              var temp = "";
              data.data.forEach((u) => {
                temp += "<tr class='row'>";
                temp += "<td>" + `<img src = ${u.avatar}>` + "</td>";
                temp += "<td>" + u.first_name + "</td>";
                temp += "<td>" + u.last_name + "</td></tr>";
              });
              document.getElementById("data").innerHTML = temp;
            }
          });
        }
      );