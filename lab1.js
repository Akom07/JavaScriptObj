const user = {
    name1: "amer" ,
    email: "akom707@gmail.com",
    id:1123,
    Available:(e)=>{
        if(e==false){
        return console.log("not Available");
    }else{
        console.log("Available");
    }

    },
    address:{
        contry:"Saudi Arabia",
        city:{
            one: "baha",
            two:"riyad"
        },
        street:"king Fahad Street"
    },
    skills: ["skill1" , "skill2" ,"skill3"]
}

console.log(user);
console.log(user.name1);
user.id=65479
console.log(user.id);
delete user.email
console.log(user);
console.log(user.Available(true));
console.log(user.address);
console.log(user.address.city);
console.log(user.skills.join());