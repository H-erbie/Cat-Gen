var screenn = document.querySelector('.app-body-screen');
var button = document.querySelector('.app-body-button');

const url = 'https://api.thecatapi.com/v1/images/search';
button.addEventListener('click', () => {
    apiRequest();
})

apiRequest = () => {
    screenn.textContent = '';
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key':  'api_key=live_tRdHWuNcZ1GAT21huFJ2kTN09Bojjb1FCb9OetkLc2bXCiVRYLweDzkPxiXcf7hW',
        }
    })
    .then((res) => {
        if(res.ok){
            return res.json();
        }
        else{
            console.log('Oops! Fetch Failed!')
        }
    })
    .then((data) => {
        console.log(data)
        console.log(data[0].url)
        loadCatImage(data);
    })
}

loadCatImage = (data) =>{
    screenn.textContent = '';
    let img = document.createElement('img');
    img.className = 'img';
    img.setAttribute('src', data[0].url);
    screenn.appendChild(img);
}


