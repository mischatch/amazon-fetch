function scraper(){

  let webPage = window.location.href.slice(0, window.location.href.length - 1); //url address of the page
debugger
  let lastPage = parseInt(Array.from(document.getElementsByClassName('a-pagination'))[0].children[6].children[0].text);
  let i = 1;
  let values = [];
  while(i <= lastPage){
    window.location.href = window.location.href.slice(0, window.location.href.length - 2) + i;
    let pageRevews = document.getElementsByClassName('a-section review');
    debugger
    Array.from(pageRevews).forEach(review => {
      let stars = review.querySelector('.a-link-normal').title.slice(0, 3); //stars e.x. 5.0
      let title = review.querySelector('.review-title').innerText; // review title
      let author = review.querySelector('.a-row span a').innerText; // author name
      let email = '';
      let date = review.querySelector('span.a-size-base.a-color-secondary.review-date').innerText.slice(3); //data
      let reviewText = review.querySelector('span.a-size-base.review-text').innerText; // review

      values.push([stars, title, author, email, date, reviewText]);

    });
    debugger

    i++;
  }


  let csvContent = "data:text/csv;charset=utf-8,";
  values.forEach(function(rowArray){
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link);

link.click();

}

scraper();
