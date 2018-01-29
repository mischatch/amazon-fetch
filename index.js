function scraper(){

  let webPage = getAdress(); //url address of the page ending with '='
  let i = 1;
  window.location.href = webPage + i;
  let lastPage = parseInt(Array.from(document.getElementsByClassName('a-pagination'))[0].children[6].children[0].text);
  let values = [];
  while(i <= lastPage){
    window.location.href = webPage + i;
    let pageRevews = document.getElementsByClassName('a-section review');
    Array.from(pageRevews).forEach(review => {
      let stars = review.querySelector('.a-link-normal').title.slice(0, 3); //stars e.x. 5.0
      let title = review.querySelector('.review-title').innerText; // review title
      let author = review.querySelector('.a-row span a').innerText; // author name
      let email = '';
      let body = review.querySelector('span.a-size-base.review-text').innerText; // body
      let date = review.querySelector('span.a-size-base.a-color-secondary.review-date').innerText.slice(3); //data

      values.push([stars, title, author, email, body, date]);

    });

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

const getAdress = () => {
  let page = window.location.href;
  for(let i = page.length - 1; i >= page.length - 4; i--){
    if(page[i] === '='){
      return page.slice(0, i + 1);
    }
  }
  return page + '&pageNumber=';
};

scraper();
