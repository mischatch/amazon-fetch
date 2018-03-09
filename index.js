function scraper(){

  let values = [];

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
  values.forEach(function(rowArray){
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  let productTitle = document.getElementById('productTitle').innerText;


  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${productTitle}.csv`);
  document.body.appendChild(link);

  link.click();

}


scraper();
