console.log("hello");

/**
 * make request to server and wait till other server gets back to us
 */

//create our own utility class 
// class UrlBuilder
// {
//     //required to have a base url 
//     constructor(base)
//     {
//         this.base = base; 
//         this.params = {};
//     }

//     addParam(key, value)
//     {
//         this.params[key] = value; 
//     }

//     //takes the base and adds on the question mark from the url 
//     build()
//     {
//         let url = this.base;
//         let counter = 0; 
//         for(const key in this.params)
//         {
//             if(counter === 0)
//             {
//                 url += '?'; 
//             }
//             else
//             {
//                url + '&'; 
//             }

//             url += key; 
//             url += '='; 
//             url += this.params[key];

//             //condensed version, not helpful for new people coming into your project and reading it 
//             // url += counter === 0 ? '?' : '&'; 
//             // url += key; 
//             // url += '='; 
//             // url += this.params[key]; 
//         } 
//         return url; 
//     }
// }

// const httpCatUrlBuilder = new UrlBuilder('https://cataas.com/');
// // httpCatUrlBuilder.addParam('count', '4'); 
// const httpCatUrl = httpCatUrlBuilder.build();
// // console.log(httpCatUrl); 

// //request takes in a couple parameters: url
// const request = new Request('https://cataas.com/');
// //fetch returns a promise for the request in the future 
// // fetch(request)
// // fetch('https://httpCat.herokuapp.com/')
// // fetch('https://httpCat.herokuapp.com/?count=3', {
// fetch(httpCatUrl, {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'}
// })
//     //create a function of response because that's what you want
//     // .then((response) => {
//     //     // console.log(response); 
//     //     return response.json(); 
//     // })
//     //can make it more compact 
//     .then(response => response.json())
//     //if going to return a json, will have to chain with another .then statement
//     .then((json) => {
//         // console.log(json);
//         //json is a key and data is an array
//         //will return cat fact one at a time everytime you refresh the page
//         // console.log(json.data[0]); 
//         //how did the developers do this and what dids they do to get out of it?
//         for(const cat of json.data)
//         {
//             //put data in the document 
//             const paragraph = document.createElement('p'); 
//             paragraph.innerText = cat; 
//             document.body.appendChild(paragraph);
//         }
//     })
//     //helps catch any errors
//     .catch((error) => {
//         console.log(error); 
//     });

fetch('https://cataas.com/',
{
    method: 'POST', 
    headers: 
    {
        'Content-Type': 'application/json'
    }
}) 
    .then(res => {
        if(res.ok) {
            console.log('SUCCESS')
            console.log(res)
        } 
        else
        {
            console.log('UNSUCCESSFUL')
        }
    })
    // .then(data => console.log(data))