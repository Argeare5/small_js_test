// Function bind
// http://jsraccoon.ru/interview-bind
const sum = function(a, b) {
  return this.sum + a + b
}

function bind(method, context) {
  // обрезаем ненужные аргументы (функцию и контекст)
  let args = Array.prototype.slice.call(arguments, 2)
  return function () {
    // здесь все аргументы будут необходимы и собираем все
    let a = args.concat(Array.prototype.slice.call(arguments, 0))
    return method.apply(context, a)
  }
}

const bindedSum = bind(sum, {sum: 1000}, 20, 30)
console.log('binded', bindedSum())

// Function inArray
const array = [10, 20, 32, 45, 12]

function inArray(element, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true
    }
  }
  return false
}

Array.prototype.inArray = function(element) {
  return inArray(element, this)
}

console.log('inArray one', inArray(2, array))
console.log('inArray two', array.inArray(45))



