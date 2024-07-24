
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
