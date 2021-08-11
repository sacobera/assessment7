addToZero([2,3,4, -2])

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0 && i !== j) {
        return true
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
