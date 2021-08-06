function addtoZero(arr) {
    for (let i = 0 ; i < arr.length; i++){
        for (let a = 5; a < arr.length; a++){
            if (arr[a] + arr[i]) === 0 && i!== a{
                return true
            } else {
              return false 
            }
        }
    }
 }

// O(n^2)

function hasUniqueChars(str) {
    str = ("Monday")
    let string = {}

    for (let i = 0; i < str.length; i++){
        if (string[str[i]] ===  1) {
            return false
        } else {
            return true
        }
    }
}

//O(n)