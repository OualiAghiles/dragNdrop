// Definitions from the first version of the code
// var data = {
//   variable: ''
// };
// var inputField = document.getElementById('input');
// var button = document.getElementById('button');
// var valueField = document.getElementById('value');
//
// var watch = function(object, property, callback) {
//   var value = object[property];
//   delete object[property];
//   Object.defineProperty(object, property, {
//     configurable: false,
//     enumerable: false,
//     get: function() {
//       return value;
//     },
//     set: function(newValue) {
//       value = newValue;
//       callback(newValue);
//     }
//   });
// };
//
// watch(data, 'variable', function(newValue) {
//   inputField.value = newValue;
//   valueField.textContent = newValue;
// });
//
// button.addEventListener('click', function() {
//   data.variable = 'Hello';
// });
//
// inputField.addEventListener('input', function() {
//   data.variable = inputField.value;
// });

class twoWayBinding {
  constructor (input,button,value) {
    this.input = input;
    this.button = button;
    this.value = value;
    let Dom = this.getDomStrings()
    let data = {
      variable: ''
    }
    this.watch(data,'variable', (newValue, Dom) => {
      this.cb(newValue, Dom)
    })
    this.setupEvent(Dom.inputField)
  }

  getDomStrings () {
    let a = document.querySelector(this.input);
    let b = document.querySelector(this.button);
    let c = document.querySelector(this.value);
    return {
      inputField: a,
      button: b,
      valueField: c
    }
  }
  watch (object, property, callback) {
    let value = object[property];
    delete object[property];
    Object.defineProperty(object, property, {
      configurable: false,
      enumerable: false,
      get: function() {
        return value;
      },
      set: function(newValue) {
        value = newValue;
        callback(newValue);
      }
    });
  }
  cb (newValue, dom) {
    dom.inputField.value = newValue;
    dom.valueField.textContent = newValue;
  }
  setupEvent (item) {
    item.addEventListener('input', function() {
      data.variable = dom.inputField.value;
    })
  }
}
// new twoWayBinding(('.twb .input','.twb .button', '.twb .value'))
