function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

const myLibrary = [];

function displayBook(book) {
  const libraryContainer = document.getElementById('library-container');

  // Create a new table
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Create table rows for each property and append them to the table body
  const properties = [
    { label: 'Title', value: book.title },
    { label: 'Author', value: book.author },
    { label: 'Pages', value: book.pages },
    { label: 'Read', value: book.read ? 'Yes' : 'No' },
  ];

  properties.forEach(property => {
    const tableRow = document.createElement('tr');

    const labelCell = document.createElement('td');
    labelCell.innerText = property.label;
    tableRow.appendChild(labelCell);

    const valueCell = document.createElement('td');
    valueCell.innerText = property.value;
    tableRow.appendChild(valueCell);

    tbody.appendChild(tableRow);
  });

  table.appendChild(tbody);

  // Append the table to the library container
  libraryContainer.appendChild(table);
}


/* function displayBook(book) {
  const bookContainer = document.createElement('div');
  bookContainer.innerHTML = `
  Title: ${book.title}<br>
  Author: ${book.author}<br>
  Pages: ${book.pages}<br>
  Read: ${book.read} ? 'Yes' : 'No'
  `;
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.appendChild(bookContainer);
} */

function createNewBook(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBook(newBook);
}


function init() {
  const form = document.getElementById('new-book-form');
  form.addEventListener('submit', createNewBook);
}

// Get references to the modal and button elements
const modal = document.getElementById("modal-window");
const button = document.getElementById("add-book-btn");

// Get the close button element
const closeButton = document.getElementsByClassName("close")[0];

// Show the modal when the button is clicked
button.addEventListener("click", function() {
  modal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

