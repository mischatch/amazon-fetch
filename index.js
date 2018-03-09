function scraper(){

  let values = []; // Object to store data

    let pageReviews = document.getElementById('cm-cr-dp-review-list'); // HTML object which contains all reviews

    Array.from(pageReviews.children).forEach((review) => {
      let stars = review.querySelector('.a-link-normal').title.slice(0, 3); //stars e.x. 5.0
      let title = review.querySelector('.review-title').innerText; // review title
      let author = review.querySelector('.a-profile-name').innerText; // author name
      let email = '';
      let body = review.querySelector('.a-expander-content').innerText; // body
      let date = review.querySelector('.review-date').innerText; //date

      values.push([stars, title, author, email, body, date]);

    });

  let csvContent = "data:text/csv;charset=utf-8,";
  values.forEach(function(rowArray){ // Iterating through array and addind lines to csv
    let row = rowArray.join(","); // Joining one line of future csv with comma
    csvContent += row + "\r\n"; // Adding data and new line
  });

  let productTitle = document.getElementById('productTitle').innerText; // Name of the product


  var encodedUri = encodeURI(csvContent); // Encoding to URI
  var link = document.createElement("a"); // Creating download link
  link.setAttribute("href", encodedUri); // Adding attributes to link
  link.setAttribute("download", `${productTitle}.csv`); // Download attribute and filename = product name
  document.body.appendChild(link); // Adding link to the page
  link.click(); // Hiting the link to download
}

scraper(); // to fire the script :-)
