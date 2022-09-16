let password = 'password1211111111'

//Checks if password is at least 10 character long and contains one number and letter 
if (password.length >= 10 && password.length <= 20 && /\d/.test(password) && /[a-zA-Z]/.test(password) && /\s/.test(password) === false)  {
    console.log(`success`);
} else {
    console.log(`failure`);
}


// two additional checks added  
// 1. password no more than 20 characters
// 2. password has no spaces
// used regexp.test method to accomplish checks /Pattern/.test(string 1) \d in the above pattern is a metcharacter that matches 0-9 and a-zA-Z for 
// uppder and lower case and \s for spaces 