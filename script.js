let result = [];
const getFile = file => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', file);
    xhr.send();

    xhr.addEventListener(`readystatechange`, () => {

        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
            JSON.parse(xhr.responseText).children
                .forEach(element => {
                    result.push(element);
                })

            console.log(result.join(", "))
        }
    })

};




getFile('data.json');
getFile('data2.json');