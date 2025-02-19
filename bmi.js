const wightin = document.getElementById('wight');
const heightin = document.getElementById('height');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',()=>{
    const w = parseFloat(wightin.value);
    const h = parseFloat(heightin.value)/100;

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        res.innerText= 'Please enter valid height and weight.';
        return;
    }

    const bmi = w/(h*h);
    res.innerText = "your BMI is:- " + bmi.toFixed(2);
})
