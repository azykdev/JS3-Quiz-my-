// Questions will be asked
const Questions = [
    {
        id: 0,
        q: "Ogohlantirish qutisiga \"Salom dunyo\"ni qanday yozish mumkin?",
        a: [
            'alertBox("Hello World");',
            'msg("Hello World");',
            'msgBox("Hello World");',
            'alert("Hello World");'
        ],
        correct: 4
    },
    {
        id: 1,
        q: "FOR sikli qanday boshlanadi?",
        a: [
            'for (i = 0; i &lt;= 5));',
            'for (i = 0; i &lt;= 5; i**)',
            'for (i = 0; i &lt;= 5; i++)',
            'for (i &lt;= 5; i++)'
        ],
        correct: 3

    },
    {
        id: 2,
        q: "JavaScript massivini yozishning to'g'ri yo'li qanday?",
        a: [
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = ["red", "green", "blue"]',
            'var colors = (1:"red", 2:"green", 3:"blue")',
            'var colors = "red", "green", "blue"'
        ],
        correct: 2

    },
    {
        id: 3,
        q: "O'zgaruvchiga qiymat berish uchun qaysi operator ishlatiladi?",
        a: [
            'x',
            '=',
            '+',
            '-'
        ],
        correct: 2

    },
    {
        id: 4,
        q: "Agar \"i\" 5 ga teng bo'lmasa, ba'zi kodlarni bajarish uchun IF iborasini qanday yozish kerak?",
        a: [
            'if (i &lt;&gt; 5)',
            'if (i != 5)',
            'if i &lt;&gt; 5',
            'if i =! 5 then'
        ],
        correct: 2

    }

]


let tests = document.querySelector('.tests');
let hourContent = document.querySelector('.hour-content')
let nextBtn = document.querySelector('.btn-success');
let backBtn = document.querySelector('.btn-danger');
let questionBox = document.querySelector('.questioBox');
let spanCheck = document.querySelectorAll('.check')

const massiv = [0, 0, 0, 0, 0];
const ptichkaMas = []


let score = 0;
let questionIndex = 0;




showQuestion()

function clearPage () {
    tests.innerHTML = '';
    questionBox.innerHTML = '';
}

function showQuestion () {

    backNone = ''
    nextNone = ''

    if (questionIndex <= 0){
        backNone = 'd-none'
    }else {
        backNone = 'd-block'
    }

    if (questionIndex >= 4){
        nextNone = 'd-none'
    } else {
        nextNone = 'd-block'
    }

    const headerTemplate = `
    <div class="questioBox">
        <h2 class="jsQuiz fs-1">JavaScript Quiz</h2>
        <h3 class="questionOf">Question ${questionIndex + 1 } of 5:</h3>
        <p class="question fs-5"> ${Questions[questionIndex]['q']}</p>

        <div class="form-check my-1">
            <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1">
            <label class="form-check-label fs-5" for="flexRadioDefault1">
                ${Questions[questionIndex]['a'][0]}
            </label>
        </div>
        <div class="form-check my-1">
            <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2">
            <label class="form-check-label fs-5" for="flexRadioDefault2">
                ${Questions[questionIndex]['a'][1]}
            </label>
        </div>
        <div class="form-check my-1">
            <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="3">
            <label class="form-check-label fs-5" for="flexRadioDefault3">
                ${Questions[questionIndex]['a'][2]}
            </label>
        </div>
        <div class="form-check my-1">
            <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="4">
            <label class="form-check-label fs-5" for="flexRadioDefault4">
                ${Questions[questionIndex]['a'][3]}
            </label>
        </div>

        <div class="row">
            <div class="col-md-3">
                <button class="btn btn-danger mt-4 py-2 px-4  ${backNone}">Orqaga</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-success mt-4 py-2 px-4 ${nextNone}">Keyingisi</button>
            </div>
            <div class="col-md-3 offset-md-3">
                <button class="btn btn-primary mt-4 py-2 px-4">Yakunlash</button>
            </div>
        </div>
        
    </div>`;

    tests.innerHTML = headerTemplate

}


function showResult () {
    const headerTemplate = `
    <div class="result">
        <h1>Result:</h1>
        <span>5 ta savoldan</span>
        <span> ${score} ta to'g'ri</span> <br /> <br />

        <h5> 1 - <span class='ptichka'>${ptichkaMas[0]}</span> </h5>
        <h5> 2 - <span class='ptichka'>${ptichkaMas[1]}</span> </h5>
        <h5> 3 - <span class='ptichka'>${ptichkaMas[2]}</span> </h5>
        <h5> 4 - <span class='ptichka'>${ptichkaMas[3]}</span> </h5>
        <h5> 5 - <span class='ptichka'>${ptichkaMas[4]}</span> </h5>
    </div>
    
    `;
    tests.innerHTML = headerTemplate
}




// Btn 
window.addEventListener('click', event => {
    
    let btnText = event.target

    let questionBox = document.querySelector('.questioBox');
    let backBtn = questionBox.querySelector('.btn-danger')
    let naxtBtn = questionBox.querySelector('.btn-success')
    let check = document.querySelectorAll('.check')
    
    // variant tanlanganligi
    
    const checkedRadio = questionBox.querySelector('input[type=radio]:checked');

    


    // variant tanlanmasa boshqa savolga o'tmaydi

    // if (!checkedRadio){
    //     event.target.blur()
    //     return
    // }
    

    if (checkedRadio) {
        massiv[questionIndex] = checkedRadio.value

        console.log(massiv)

        check[questionIndex].classList.add('check-checked')
    }

    check.forEach((value, i) => {
        value.addEventListener('click', () => {
            questionIndex = i
            showQuestion() 
        })
    })
     
    // btn

    // Keyingisi
    if (btnText.innerText == 'Keyingisi' && questionIndex < 5) {

        // score
        
        questionIndex += 1
        showQuestion() 

        
    }
})




// orqaga
window.addEventListener('click', end => {
    let btnText = end.target.innerText;

    if (btnText == 'Orqaga' && questionIndex > 0) {
        questionIndex -= 1
        showQuestion()
    } 
})


// yakunlash
window.addEventListener('click', end => {
    
    let btnText = end.target;
    let checkRadio = 0
    

    if (btnText.innerText == 'Yakunlash'){
  
        for (let j=0; j<=4; j++){
            if (massiv[j] == 0){
                checkRadio += 1
                ptichkaMas[j] = 'Belgilanmagan'
            } else if (massiv[j] == Questions[j].correct) {
                score += 1;
                ptichkaMas[j] = '&#9989;'
            } else {
                ptichkaMas[j] = `<span class='d-inline-block text-danger fw-bold'> &#x2715; </span> `
            }
        } 
        
        
        // massiv.forEach((value, i) => {
        //         console.log(value[i])
        //         console.log(Questions[i].correct)
        //         if (value[i] == Questions[i].correct) {
        //                 score += 1;
        //         console.log('score:' + score)
        //     } else {
        //             console.log('nol')
        //         }
        //     })
            
            
            // if (checkedRadio.value == Questions[questionIndex].correct) {
                //     score += 1;
                //     console.log('score:' + score)
                // } else{
                    //     console.log('nol')
                    // }
                    
        result = confirm(`TESTNI YAKUNLAMOQCHIMISIZ ?  \n ${checkRadio} TA SAVOL BELGILANMAGAN`)
        
        if (result) {
            showResult()
            hourContent.innerHTML = '<h2> Test Vaqtdan oldin yakunlandi </h2>'
        } 
    } 
})
            
            
            
            
// Timer code start

let sekund = document.querySelector('.second'),
    minut = document.querySelector('.minut'),
    secCounter = 60,
    minCounter = 4;

setTimeout (() => {
    minut.innerText = '0' + minCounter;
}, 1000)

let startTimer = setInterval(() => {
    secCounter--;
    sekund.innerText = secCounter;
    

    if (secCounter == 0) {
        if (minCounter > 0){
            --minCounter
            minut.innerText = '0' + minCounter;
            secCounter = 60
        }
    }

    if (minCounter == 0 && secCounter == 0) {

        clearInterval(startTimer)

        showResult()
        hourContent.innerHTML = '<h2> Vaqt Tugadi !!! </h2>'  
    }

}, 1000);

