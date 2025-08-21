const employee={
    ename:"rahul kumar",
    eage:"30",
    eaddress:"Ghaziabad",
    planguage:[{
        language1:"java",
        language2:"python"
    },
{
    database1:"oracle",
    database2:"mysql"
},
{
    framerok1:"hibernet",
    framework2:"spring"
}]
}
employee.company="HCL";
console.log(employee);
employee.planguage[1].database1="monodb";
console.log(employee[1]);
// console.log(employee);
// console.log(employee.planguage[0].language2);
delete employee.ename;