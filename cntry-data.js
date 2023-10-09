// fetching data from API >> creating table  
fetch("https://jsonplaceholder.typicode.com/todos")
.then((array) => array.json())
.then((data) => fortable(data))
.catch((err) => console.log(err.message))


function fortable(fordata)
{
    let tr = " ";
    fordata.forEach((dataele) => {
       tr += `<tr>
                  <td>${dataele.userID} </td>
                  <td>${dataele.id} </td>
                  <td>${dataele.title} </td>
                  <td>${dataele.completed} </td>

              </tr>`
    });
    let result = document.getElementById("todos")
    result.innerHTML = tr;
    

}