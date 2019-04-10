let downloadBtn = document.querySelector('.download_btn');
let urlInput = document.querySelector('.url_input');
let thumnail = document.querySelector('.thumbnail_image');
let title = document.querySelector('.video_info p');
// thumnail.src = "https://i.ytimg.com/vi/ggh0Ptk3VGE/default.jpg";

downloadBtn.addEventListener('click', () => {
    console.log("Url is: ", urlInput.value);
    // window.location.href = `http://localhost:3000/download?URL=${urlInput.value}`;
    sendFile(urlInput.value);
})

// when Enter is pressed
urlInput.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        event.preventDefault()
        sendFile(urlInput.value);
    }
})

function sendFile(URL) {
    fetch(`http://localhost:3000/download?URL=${URL}`, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("data is: ", data);
            thumnail.src = data.thumbnail_url;
            title.innerHTML = data.title;
            document.querySelector('.video_info').style.display = 'block';
            urlInput.value = "";
        })
        .catch(e => console.error(e));
}