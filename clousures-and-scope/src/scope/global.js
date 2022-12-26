
function countries() {
    country = 'Colombia'; // declaro accidentalmente la variable como global.
    console.log(country);
}

countries();
console.log(country);