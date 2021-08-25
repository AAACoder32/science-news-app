let articles = '';
let apiKey ='549b50feae314c77847c5de736c033ca';
let url = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="+apiKey;
window.addEventListener('online', statusUpdate);
window.addEventListener('offline', statusUpdate);

let para = document.querySelector('.card h3');

function getData() {
  let articles = '';
  const xhr = new XMLHttpRequest();
  let json = '';
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      json = JSON.parse(this.responseText);
      articles = json.articles;
      let str = '';
      articles.forEach(function(element, index) {
        let news = `<a href="${element['url']}">
        <div class="card">
        <img src="${element['urlToImage']}" alt="No image found" />
        <div class="news-title">
        <h4>${element['title'].substr(0, 120)+'...'}</h4>
        </div>
        </div>
        </a>`;

        str += news;

      });
      mainContainer.innerHTML = str;
    }
  }
  xhr.send();
}

let retryBtn = `<div class="internet" id="internetResponse">
<p id="no-internet"><b>No internet connection! Please check your internet connection.</b></p>
</div>`;


function statusUpdate() {
  //window.location.reload();
  if (navigator.onLine) {
    getData(url);
    let country = document.getElementsByClassName('country');
    country[0].addEventListener('click', () => {
      url = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="+apiKey;
      country[0].style.color = '#af5678';
      country[1].style.color = '#000000';
      country[2].style.color = '#000000';
      getData(url);
      newsSource.style.animation = 'hideNavList .3s ease-in-out';
      newsSource.style.transform = 'translateX(-73vw)';
      mainContainer.style.pointerEvents = '';
      isActive = false;
    });
    country[1].addEventListener('click', () => {
      url = "http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="+apiKey;
      country[1].style.color = '#af5678';
      country[0].style.color = '#000000';
      country[2].style.color = '#000000';
      getData(url);
      newsSource.style.animation = 'hideNavList .3s ease-in-out';
      newsSource.style.transform = 'translateX(-73vw)';
      mainContainer.style.pointerEvents = '';
      isActive = false;
    });
    country[2].addEventListener('click', () => {
      url = "http://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey="+apiKey;
      country[2].style.color = '#af5678';
      country[0].style.color = '#000000';
      country[1].style.color = '#000000';
      getData(url);
      newsSource.style.animation = 'hideNavList .3s ease-in-out';
      newsSource.style.transform = 'translateX(-73vw)';
      mainContainer.style.pointerEvents = '';
      isActive = false;
    });
  } else {
    document.body.innerHTML = retryBtn;
    window.location.reload();
  }
}

statusUpdate();