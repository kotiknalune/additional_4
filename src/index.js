module.exports = function multiply(first, second) {
  let first = first.split("").reverse()
  let second = second.split("").reverse()
  let arr = []
  for(let i=0; i<first.length; i++) {
    let tmp = []
    for(let k=0; k<i; k++) {
      tmp.push(0)
    }
    for(let j=0; j<second.length; j++) {
      tmp.push(first[i]*last[j])
    }
    arr.push(tmp)
  }
  arr.reverse()
  for(let i=1; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      arr[0][j] += arr[i][j]
    }
  }
  arr = arr[0]
  for(let i=0; i<arr.length; i++) {
    let tmp = arr[i]
    if(tmp > 9) {
      if(i == arr.length-1) {
        arr[i] = tmp % 10
        arr.push((tmp - tmp % 10) / 10)
      }
      else {
        arr[i] = tmp % 10
        arr[i+1] += (tmp - tmp % 10) / 10
      }
    }
  }
  return arr.reverse().join('')
}
