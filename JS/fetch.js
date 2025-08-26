const username="iamajay"
const data=fetch(`https://api.github.com/users/${username}`);
data.then(res=>res.json())
.then((da)=>{
    // console.log(da);
    const table=document.querySelector("table");
    const row=table.insertRow();
    row.insertCell(0).innerText=da.login;
    row.insertCell(1).innerText=da.id;
    row.insertCell(2).innerText=da.url;
row.insertCell(3).innerText=da.public_repos;

})
.catch((err)=>{
    console.log("Error"+err)
})