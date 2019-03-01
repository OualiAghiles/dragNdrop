/**
 * utils class
 * @param el
 * @param cb
 * @constructor
 */
function Utils(el, cb) {
  this.el = el;
  this.cb =cb
  this.forEachClick(el, cb)
}

/**
 *
 * @param {list} els list of elemets to add same event
 * @param {fn} cb execute the fuction on each element of the table
 * @method forEachClick
 * @return {event} add event listener on each item
 */
function forEachClick (els, cb) {
  var arr = document.querySelectorAll(el);
  arr.forEach(function(item) {
    item.addEventListener('click', cd)
  })
}
