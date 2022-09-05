let button = document.querySelector("#getJoke")
let list = document.querySelector(".list-Jokes")

const addJokes = async() =>
{   
    const start = await randJokes();
    const Newli = document.createElement("LI")
    Newli.append(start)
    list.append(Newli)
}


const randJokes = async () =>
{
   const config = {headers: {Accept: 'application/json'}} 
   const call = await axios.get('https://icanhazdadjoke.com/',config)
   console.log(call.data.joke)
   return call.data.joke
}
button.addEventListener('click', addJokes)