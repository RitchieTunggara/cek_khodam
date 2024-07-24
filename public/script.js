// document.getElementById('generate').addEventListener('click', function() {
//     const min = parseInt(document.getElementById('min').value);
//     const max = parseInt(document.getElementById('max').value);
//     if (isNaN(min) || isNaN(max) || min > max) {
//         alert('Please enter valid numbers with min less than or equal to max.');
//         return;
//     }
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     document.getElementById('result').innerText = randomNumber;

//     // Save the number to the backend
//     fetch('/save-number', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ number: randomNumber })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             fetchSavedNumbers();
//         } else {
//             alert('Failed to save the number.');
//         }
//     });
// });

function fetchSavedNumbers() {
    fetch('/get-numbers')
    .then(response => response.json())
    .then(data => {
        const savedNumbers = document.getElementById('saved-numbers');
        savedNumbers.innerHTML = '';
        data.numbers.forEach(number => {
            const li = document.createElement('li');
            li.textContent = number;
            savedNumbers.appendChild(li);
        });
    });
}

document.getElementById('check').addEventListener('click', function() {
    // const username = document.getElementById('name');
    const username = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    let usernameVal = 0;
    for (let i = 0; i < username.length; i++)
    {
        usernameVal += parseInt(username.charCodeAt(i));
    }
    usernameVal += age;

    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }

    let khodam_name = [
        "Naga Api",
        "Naga Tanah",
        "Naga Air",
        "Naga Angin",
        "Naga Kerdil",
        "Naga Ekor Dua",
        "Naga Tanpa Kaki",
        "Naga Indosiar",
        "Naga Kecil",
        "Naga Merah",
        "Naga Pink",
        "Ikan Api",
        "Ikan Air",
        "Ikan Andin",
        "Ikan Tanah",
        "Ikan Goreng",
        "Ikan Lele",
        "Ikan Asin",
        "Ikan Goreng",
        "Ikan Rebus",
        "Ikan Naki",
        "Meja Api",
        "Meja Lipat",
        "Kaki Meja",
        "Meja Bundar",
        "Meja Makan",
        "Kosong",
        "Kosong",
        "Kosong",
        "Kosong"
    ]

    // shuffle(khodam_name);

    document.getElementById('kodam_result').innerText = khodam_name[usernameVal%30];
});

// Fetch saved numbers on page load
fetchSavedNumbers();