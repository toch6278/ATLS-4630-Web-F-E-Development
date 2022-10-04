console.log("hello");

/**
 * make request to server and wait till other server gets back to us
 */

//create our own utility class 

refreshButton = document.querySelector("#reload");
refreshButton.addEventListener('click', () => {
    window.location.reload(true); 
});
 

fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((data) => {
  // do stuff with your json data here

    //print data to console
    console.log(data);

    // get quote text from the api
    console.log(data.content);

    // insert quote text using a template literal a paragraph element within content div
    document.getElementById("content").innerHTML = `<p>${data.content}</p>` + `<p><strong> - ${data.author}</strong></p>`;
    // document.getElementById("content").innerHTML = `<p>${data.author}</p>`;
    
  })
  .catch(() => {
        // on error, print msg to console
        console.log("ajax error");
      });