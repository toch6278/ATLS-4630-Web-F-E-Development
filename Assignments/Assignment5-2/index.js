// console.log('hello')
import * as RiTa from "rita"; 

var field = document.getElementById('input'); 



function findRhymes() {
    let rhymes = RiTa.rhymes(field);
    console.log(`RiTa'srhymes: ${rhymes}`);
    if (rhymes.length > 0) {
      text(rhymes.join(" "),
        10, 10, width-10, height-10);
    }
}

field.addEventListener('click', findRhymes);

