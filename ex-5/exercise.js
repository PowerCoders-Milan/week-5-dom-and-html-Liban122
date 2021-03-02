function loadBooks(array) {

      for (var i = 0; i < array.length; i++) {
        var bookP = document.createElement('p');
        var bookDescription = document.createTextNode(array[i].title + ' by ' + array[i].author);
        bookP.appendChild(bookDescription);
        document.body.appendChild(bookP);
      }
     
     for (var i = 0; i < books.length; i++) {
        var items = document.getElementsByTagName('li');
        var bookDescription = document.createTextNode(array[i].title + ' by ' + array[i].author);
        items[i].className = 'list-item';
     }
     for(var i = 0; i < array.length; i++){
        var myPic = document.createElement('img');
        var bookDescription = document.createTextNode(array[i].title + ' by ' + array[i].author);
        myPic.src = books.img;
        document.body.appendChild(myPic);
     } 
}

// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png' },
     { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png' }, 
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png' }
]

// This function will execute when the window loads
window.onload = loadBooks(books);

