
let birth = prompt('Enter your year of birth');
let today = new Date(); 
let now = today.getFullYear();

age = (now - birth);
if (birth) {
  alert(`You are ${age} years old`);
} else {
  alert('It is a pity that you did not want to enter your year of birth');
}

const city = prompt('in which city do you live?');

if (city === `Kyiv`) {
  alert(`You live in the capital of Ukraine`);
} else if (city === `London`) {
  alert(`You live in the capital of Great Britain`);
} else if (city === `Washington`) {
  alert(`You live in the capital of United States`);
} else if (!city) {
  alert('It is a pity that you did not want to enter your city');
} else {
  alert(`You live in the city ${city}`);
}
 
const sport = prompt ('your favorite sport?');

if (sport === `tennis`) {
  alert(`Cool! Do you want to become like Elina Svitolina?`);
} else if (sport === `swimming`) {
  alert(`Cool! Do you want to become like Yana Klochkova?`);
} else if (sport === `chess`) {
  alert(`Cool! Do you want to become like Anna Muzychuk?`);
} else if (!sport) {
  alert(`It's a pity that you didn't want to enter your favorite sport`);
} else {
  alert(`Your favorite sport ${sport}`);
}

alert (`Your ${age} years old, live in the city ${city}, favorite sport ${sport}`);