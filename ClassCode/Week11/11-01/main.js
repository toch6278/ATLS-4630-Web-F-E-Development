// import title from './title.js'; 

// document.body.innerHTML += (title('Torsh'));
// document.body.innerHTML += (title('Not Peter'));

//using the class way 
import Title from './title.js'; 
const title = new Title('Torsh');

document.body.innerHTML += title.render();