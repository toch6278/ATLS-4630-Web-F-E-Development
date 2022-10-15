// export const month = "October"; 
// export let date = 13; //be variable instead of a constant

// export function printTheDate()
// {
//     console.log(`The month is: ${month}, and the day is: ${day}`);
// }

// export {month};

import UrlBuilder from '.UrlBuilder.js'; 
const urlBuilder = new UrlBuilder('https://google.com'); 
// const googleUrl = urlBuilder.

const thisMonth = "October"; 
export let date = 13; //be variable instead of a constant

export function printTheDate()
{
    console.log(`The month is: ${thisMonth}, and the day is: ${day}`);
}

export {thisMonth as month};