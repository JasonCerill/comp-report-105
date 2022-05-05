
//this function needs an array
function displayUsers(usersArray){
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        console.log(user);
    row=`
    <tr>
        <td> ${user.firstname}</td>
        <td> ${user.lastName}</td>
    </tr>
    `;
    console.log(row);
    }
    
    $("#usersTable").append(row); //append the user on the html table-->read jquery documentation append()

}

function init(){
    console.log("Listing Users"); //getting the array
    let users=readUsers();
    console.log(users);

}