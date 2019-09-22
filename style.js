class APIService {
    constructor() {
        this._baseURL = "https://newsapi.org/v2/top-headlines?country=";
        this._apiKey = "&apiKey=18f1c87e444741aca30db0a569bba999";
    }

    async getNews(country) {
        const data = await fetch(`${this._baseURL}${country}${this._apiKey}`);

        if (!data.ok) {
            throw new Error("Could not fatch data from API");
        }
        else {
            return await data.json();
        }
        
    }
}

let api = new APIService();
let country = document.querySelector('#country').value;

function myFunction() {
    select = document.getElementById("country");
    let value = select.options[select.selectedIndex].value;
    console.log('country =>>>',value); 
    api.getNews(value)
    .then(({ articles }) => {
        console.log("articles =>>>", articles);
    let row = document.querySelector('.news');
    let leftcolumn = document.createElement('div');
    leftcolumn.className = 'col-md-3 column';
        row.appendChild(leftcolumn);
        for(var i=0; i<articles.length/4; i++){
            let boxItem = document.createElement('div');
            boxItem.className = 'box-item';
            leftcolumn.append(boxItem);
            let boxPost = document.createElement('div');
            boxPost.className = 'box-post';
            leftcolumn.append(boxPost);
            let h1 = document.createElement('h1')
            h1.className = 'post-title';
            boxPost.appendChild(h1);
            let a = document.createElement('a');
            a.className = 'url';
            h1.appendChild(a);
            a.setAttribute('href', articles[i].url);
            a.textContent = articles[i].title;
            let span = document.createElement('span');
            span.className = "date-time";
            boxPost.appendChild(span);
            let datePost = document.createElement('i');
            span.appendChild(datePost);
            datePost.textContent = articles[i].publishedAt;
            let image = document.createElement('img');
            image.setAttribute('src', articles[i].urlToImage);
            image.setAttribute('alt', articles[i].title);
            boxItem.appendChild(image);
        }   
    let centerleftcolumn = document.createElement('div');
    centerleftcolumn.className = 'col-md-3 column';
        row.appendChild(centerleftcolumn);
        for(var i=articles.length/4; i<articles.length/2; i++){
            let boxItem = document.createElement('div');
            boxItem.className = 'box-item';
            centerleftcolumn.append(boxItem);
            let boxPost = document.createElement('div');
            boxPost.className = 'box-post';
            centerleftcolumn.append(boxPost);
            let h1 = document.createElement('h1')
            h1.className = 'post-title';
            boxPost.appendChild(h1);
            let a = document.createElement('a');
            a.className = 'url';
            h1.appendChild(a);
            a.setAttribute('href', articles[i].url);
            a.textContent = articles[i].title;
            let span = document.createElement('span')
            span.className = "date-time"
            boxPost.appendChild(span)
            let datePost = document.createElement('i')
            span.appendChild(datePost)
            datePost.textContent = articles[i].publishedAt
            let image = document.createElement('img')
            image.setAttribute('src', articles[i].urlToImage)
            image.setAttribute('alt', articles[i].title)
            boxItem.appendChild(image)
        }
    let centerrightcolumn = document.createElement('div');
    centerrightcolumn.className = 'col-md-3 column';
        row.appendChild(centerrightcolumn);
        for(var i=articles.length/2; i<articles.length-5; i++){
            let boxItem = document.createElement('div');
            boxItem.className = 'box-item';
            centerrightcolumn.append(boxItem);
            let boxPost = document.createElement('div');
            boxPost.className = 'box-post';
            centerrightcolumn.append(boxPost);
            let h1 = document.createElement('h1')
            h1.className = 'post-title';
            boxPost.appendChild(h1);
            let a = document.createElement('a');
            a.className = 'url';
            h1.appendChild(a);
            a.setAttribute('href', articles[i].url);
            a.textContent = articles[i].title;
            let span = document.createElement('span')
            span.className = "date-time"
            boxPost.appendChild(span)
            let datePost = document.createElement('i')
            span.appendChild(datePost)
            datePost.textContent = articles[i].publishedAt
            let image = document.createElement('img')
            image.setAttribute('src', articles[i].urlToImage)
            image.setAttribute('alt', articles[i].title)
            boxItem.appendChild(image)
        }
    let rightcolumn = document.createElement('div');
    rightcolumn.className = 'col-md-3 column';
        row.appendChild(rightcolumn);
        for(var i=articles.length-5; i<articles.length; i++){
            let boxItem = document.createElement('div');
            boxItem.className = 'box-item';
            rightcolumn.append(boxItem);
            let boxPost = document.createElement('div');
            boxPost.className = 'box-post';
            rightcolumn.append(boxPost);
            let h1 = document.createElement('h1')
            h1.className = 'post-title';
            boxPost.appendChild(h1);
            let a = document.createElement('a');
            a.className = 'url';
            h1.appendChild(a);
            a.setAttribute('href', articles[i].url);
            a.textContent = articles[i].title;
            let span = document.createElement('span');
            span.className = "date-time";
            boxPost.appendChild(span);
            let datePost = document.createElement('i');
            span.appendChild(datePost);
            datePost.textContent = articles[i].publishedAt;
            let image = document.createElement('img');
            image.setAttribute('src', articles[i].urlToImage);
            image.setAttribute('alt', articles[i].title);
            boxItem.appendChild(image);
        }
    })
    .catch(err => console.log(err.message));
  
    for (var i = 0; i < 4; i++) {
    var elem = document.querySelector(".column");
    console.log(elem.remove());
    }
}
setTimeout(myFunction,100)


