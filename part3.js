addToZero([2,3,4, -2])

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let a = 1; a < arr.length; a++) {
      if (arr[i] + arr[a] === 0 && i !== a) {
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
