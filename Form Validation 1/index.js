// Form Validation

let registrationForm = document.querySelector(".RegisterBtn").addEventListener("click", function(event) {
    event.preventDefault();// stops auto form submition
    if(ValidateForm()){
        alert("FORM IS SUBMITTED SUCCESSFULLY")
    }
    else{
        alert( "SOMETHING WENT WRONG")
    }
});

let ValidateForm = () => {
    if(checkUserName() & checkEmail() & checkPassword() & checkpassword()){
        return true
    }
    else {
        return false
    }
};

let checkUserName = () => {
    let inputEle = document.querySelector(".UserElement");
    let inputFeedBackEle = document.querySelector(".UserNameFeedback");
    let regExp = /^[a-zA-Z0-9]+$/;
    if(regExp.test(inputEle.value)){
        makeValid(inputEle,inputFeedBackEle);
        return true
    }else {
        makeInValid(inputEle,inputFeedBackEle);
        return false
    }

};

let checkEmail = () => {
    let inputEle = document.querySelector(".EmailElement");
    let inputFeedBackEle = document.querySelector(".EmailFeedback");
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regExp.test(inputEle.value)){
        makeValid(inputEle,inputFeedBackEle);
        return true
    }else {
        makeInValid(inputEle,inputFeedBackEle);
        return false
    }

};

let checkPassword = () => {
    let inputEle = document.querySelector(".PasswordElement");
    let inputFeedBackEle = document.querySelector(".PasswordFeedback");
    let regExp = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regExp.test(inputEle.value)){
        makeValid(inputEle,inputFeedBackEle);
        return true
    }else {
        makeInValid(inputEle,inputFeedBackEle);
        return false
    }

};

let checkpassword = () => {
    let inputEle = document.querySelector(".passwordElement");
    let inputFeedBackEle = document.querySelector(".passwordFeedback");
    let regExp = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regExp.test(inputEle.value)){
        makeValid(inputEle,inputFeedBackEle);
        return true
    }else {
        makeInValid(inputEle,inputFeedBackEle);
        return false
    }
};

// makeValid

let makeValid = (inputEle,inputFeedBackEle) => {
    inputEle.classList.add("Is-form-valid");
    inputEle.classList.remove("Is-form-invalid");
    inputFeedBackEle.classList.add("text-success");
    inputFeedBackEle.classList.remove("text-danger");
    inputFeedBackEle.innerText = "Looks Good";
};

// MakeInvalid

let makeInValid = (inputEle,inputFeedBackEle) => {
    inputEle.classList.remove("Is-form-valid");
    inputEle.classList.add("Is-form-invalid");
    inputFeedBackEle.classList.remove("text-success");
    inputFeedBackEle.classList.add("text-danger");
    inputFeedBackEle.innerText = `Please Enter ${inputEle.placeholder}`;
}

// username field with keyup event

let userNameEle = document.getElementsByClassName("UserElement")[0].addEventListener("keydown", () => {
    checkUserName()
});

// Email field with keyup event

let EmailNameEle = document.getElementsByClassName("EmailElement")[0].addEventListener("keydown", () => {
    checkEmail()
});

// Password field with keyup event

let PasswordEle = document.getElementsByClassName("PasswordElement")[0].addEventListener("keydown", () => {
    checkPassword()
});

// password field with keyup event

let passwordEle = document.getElementsByClassName("passwordElement")[0].addEventListener("keydown", () => {
    checkpassword()
});


