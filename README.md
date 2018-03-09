# Browser console script for scraping reviews on amazon product


## How it works:
* Finds HTML object which contains all reviews on one pageReviews
* Iterates through this elements children and extracts data like:
  * Reviewer name
  * Date of review (ex. ```November 18 2016```)
  * Review stars (ex. ```5.0```)
  * Review title
  * Review text
* Populates array object
* Iterates through this object and adds joined data to future csv file(each array containing one review data on a line)
* Encodes csv fili to URI
* Creates a link to download file and hits this link
* On output you get CSV file downloaded


![Alt text](/assets/screen.png)


### Want to try?
  * Open index.js file and copy it's content
  * Open chrome, select amazon product and open console(chrome dev tools)
  * Paste script and hit Enter
  
