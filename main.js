let linkS = document.querySelector('img')
let inputSearch = document.querySelector('#inputSearch')
let btnSearchImg = document.querySelector('#btnSearchImg')
let btnRandomImg = document.querySelector('#btnRandomImg')

let request = false;

let API = 'zyVussIzQM8YlsaQDWqN8W6z4uYiJU9y'
let RequestURLRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`


btnRandomImg.addEventListener('click', async () => {
    await requestRandom()
})

const requestRandom = async () =>{
     fetch(RequestURLRandom)
    .then((res)=>res.json())
    .then(res => {
        let link = res['data']['images']['original']['url']
        linkS.src = link
        console.log(link)
        linkS.src = link
    })
}

inputSearch.addEventListener('keydown', async (event) =>{
    if(event.key === 'Enter')
    {
        console.log(1)
        requestSearch()
    }
})



const requestSearch = async() =>{
    let RequestURLSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${inputSearch.value}&limit=1&offset=0&rating=g&lang=en`
    console.log(1)
    fetch(RequestURLSearch)
    .then((gif)=>gif.json())
    .then(gif =>{
        let inputSearch = gif['data'][0]['images']['original']['url']
        //btnSearchImg.src = inputSearch
        console.log(inputSearch)
        linkS.src = inputSearch
        inputSearch.value = ''
    })

    .catch((err)=>{
        link = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bsodwindows10.png/1280px-Bsodwindows10.png"
        linkS.src = link
        console.log(err)
        inputSearch.value = ''
    })
}