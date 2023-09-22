const n = ''
const password = ''
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const minimum = 6;
    let needed = 0;
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    for (let i = 0; i < n; i++) {
        if(password.length !== minimum ) {
            password.length
        }else if(password !== numbers){
            return needed = numbers
        }else if(password !== lower_case[i]){
            needed = lower_case
        }else if(password !== upper_case[i]) {
            needed = upper_case
        }else if(password !== special_characters[i]) {
            needed = special_characters
        }
    }
    console.log( needed = password.length)
}
minimumNumber()