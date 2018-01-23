let webPage = 'https://www.amazon.com/ViQing-Gear-Kinesiology-Building-Athletic/product-reviews/B013TG3SRS/ref=cm_cr_getr_d_paging_btm_2?ie=UTF8&reviewerType=all_reviews&sortBy=recent&pageNumber=1';
$.get(webPage, (resp,status) => {
  console.log(resp);
  debugger
});




// let pageRevews = document.getElementsByClassName('a-section review'); // all reviews on page
//
//
//
// // last page
// let a = document.getElementsByClassName('a-pagination');
// let b = Array.from(a);
// let lastPage = parseInt(b[0].children[6].children[0].text);
//
//
// let i = 1;
// while(i <= lastPage){
//   let scrape = webPage + i;
//
//   i++;
// }
