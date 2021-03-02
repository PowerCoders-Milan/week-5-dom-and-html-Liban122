# The Book List

Let's import from an array all these books that I have read.

Copy this array of books:

var books = [
  { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false }, { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
];

Iterate through the array of books. <br>
For each book, create a p element with the book title and a p element for author.<br>
Append them to the page.

The function will execute on load of the page thanks to **window.onload**.

## Extra

Use a ul and li to display the books. <br>
Add an img to each book that links to a URL of the book cover (add the link in the array elements to do this). <br>
Change the style of the book depending on whether you have read it or not (green and red for example).
