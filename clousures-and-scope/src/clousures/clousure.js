function saludar() {
    let username = 'Yojan';

    function displayUsername(){
        return `Hello ${username}`
    }

    return displayUsername;
}

const s = saludar();
console.log(s);
console.log(s());
