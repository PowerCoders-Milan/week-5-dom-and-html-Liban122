function loadBooks(array) {

      for (var i = 0; i < array.length; i++) {
        var bookP = document.createElement('p');
        var bookDescription = document.createTextNode(array[i].title);
        var author = document.createTextNode (' by '  + array[i].author);
        var image = document.createElement('img');
        image.setAttribute("src", books.img)

        bookP.appendChild(bookDescription);
        document.body.appendChild(bookP);
        document.body.appendChild(author);

        var ulist = document.createElement('ul');
        var theList1 = document.createElement('li');
        var theList2 = document.createElement('li');
        var theList3 = document.createElement('li');

       ulist.appendChild(theList1);
       ulist.appendChild(theList2);
       ulist.appendChild(theList3);

       theList1.appendChild(bookDescription);
       theList2.appendChild(author);
       theList3.appendChild(image)

       document.getElementsByTagName('body')[0].appendChild(ulist)
       books.alreadyRead == true ? bookP.style.backgroundColor = 'red' : bookP.style.backgroundColor = 'blue'
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

