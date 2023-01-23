const buttonSubmit = document.querySelector('.form-submit');

const emptyValue = () => {
    let ban = false;
    if(document.getElementById('name').value == ''){
        let img = document.getElementById('name-img');
        let label = document.getElementById('name-label');
        showError(img, label);
        ban = true;
    }
    if(document.getElementById('lastname').value == ''){
        let img = document.getElementById('lastname-img');
        let label = document.getElementById('lastname-label');
        showError(img, label);
        ban = true;
    }
    if(document.getElementById('email').value == ''){
        let img = document.getElementById('email-img');
        let label = document.getElementById('email-label');
        showError(img, label);
        ban = true;
    }
    if(document.getElementById('password').value == ''){
        let img = document.getElementById('password-img');
        let label = document.getElementById('password-label');
        showError(img, label);
        ban = true;
    }
    return ban;
}
const showError = (img, label) => {
    img.classList.toggle('form-img-show');
    label.classList.toggle('form-label-show');
    setTimeout(()=> {
        img.classList.toggle('form-img-show');
        label.classList.toggle('form-label-show');
    }, 2000)
}
buttonSubmit.addEventListener('click', e => {
    e.preventDefault();
    if(!emptyValue()){
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});