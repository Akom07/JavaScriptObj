characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  const blueEyes = characters.find(e => e.eye_color =="blue")
  console.log(blueEyes);

  const lowMass = characters.find(e => e.mass >50)
  console.log(lowMass);

  
  const short = characters.filter(e => e.height <200)
  console.log(short);

  const gen = characters.filter(e => e.gender == "male")
  console.log(gen);

  const names = characters.map(e => e.name )
  console.log(names);
  
  const heights = characters.map(e => e.height )
  console.log(heights); 
  
  const sortMass = characters.sort((a,b)=>{
    return a.mass - b.mass
  } )
  console.log(sortMass);

  const sortHeight = characters.sort((a,b)=>{
    return b.height - a.height
  } )
  console.log(sortHeight);


  const allMass = characters.every(e => e.mass > 40)
console.log(allMass);

const allshort = characters.every(e => e.height < 200)
console.log(allshort);

const blueEye = characters.some(e => e.eye_color == "blue")
console.log(blueEye);

const tall = characters.some(e => e.height >210)
console.log(tall);