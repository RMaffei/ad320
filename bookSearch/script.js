const searchInput = document.getElementById("searchInput");
const sortDropdown = document.getElementById("sortDropdown");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");

// event listener for search button
searchButton.addEventListener("click", searchBooks);

async function searchBooks() {
    const searchTerm = searchInput.value.trim();
    const sortBy = sortDropdown.value;
    
    // first validate the search term
    if (searchTerm === "") {
        alert("Please enter a search term.");
        return;
    }

    // validate the sort option
    if (sortBy !== "popular" && sortBy !== "subject") {
        alert("Invalid sort by option.");
        return;
    }
    // fetch from API matching terms and sort option
    const url = `https://gutendex.com/books?search=${searchTerm}&sort=${sortBy}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error: Network Response.");
        }
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Sorry, error fetching data:', error);
        resultsContainer.innerHTML = "Sorry, error fetching data. Please try again.";
    }
}
// display matching books 
function displayResults(books) {
    resultsContainer.innerHTML = "";
    if (books.length === 0) {
        resultsContainer.textContent = "Sorry, no books were found.";
    } else {
        books.forEach(book => {
            const div = document.createElement("div");
            div.classList.add("book");
            div.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.authors.map(author => author.name).join(", ")}</p>
                <p>Subjects: ${book.subjects.join(", ")}</p>
            `;
            resultsContainer.appendChild(div);
        });
    }
}