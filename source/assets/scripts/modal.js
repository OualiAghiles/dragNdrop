// Trigger modals
(function () {
  /**
   * @namespace modalFX
   * @classdesc modalFX open modal.
   * @class
   * @hideconstructor
   */
  const modalFX = (function () {
    /**
     * @namespace
     * @memberof modalFX
     * @borrows elements as object
     */
    const elements = {
      target: 'data-target',
      active: 'is-active',
      button: '.modal-button',
      close: '.modal-close',
      buttonClose: '.modal-button-close',
      background: '.modal-background'
    };
    /**
     * Send a request.
     * @param {requestCallback} cb - The callback that handles the response.
     * generic Class to handel event Click on all element of table node
     * @param {string} selector Html calss or id
     * @function onClickEach
     * @memberof modalFX
     * @alias onClickEach
     * @inner
     * @tutorial onClickEach(selector, callback)
     * @example onClickEach(elements.button, openModal);
     * // or
     * onClickEach('.btn', function (e) {
       e.preventDefault();
       this.style.bacgroundColor = 'red';
     })
     * @returns init event Click for each element of an array
     */
    const onClickEach = function (selector, callback) {
      const arr = document.querySelectorAll(selector);
      arr.forEach((el) => {
        el.addEventListener('click', callback);
      });
    };

    const events = function () {
      /**
       * This callback is displayed as part of the modalFX class and open modal.
       * @callback requestCallback
       * @param {string} elements.button  html Element
       * @param {cb} openModal()  start function
       */
      onClickEach(elements.button, openModal);

      onClickEach(elements.close, closeModal);
      onClickEach(elements.buttonClose, closeAll);
      onClickEach(elements.background, closeModal);

      // Close all modals if ESC key is pressed
      document.addEventListener('keyup', (key) => {
        if (key.keyCode == 27) {
          closeAll();
        }
      });
    };
    /**
     * generic Class to close all modals
     * @function closeAll
     * @memberof modalFX
     * @inner
     * @tutorial modalFX.closeAll()
     * @example modalFX.closeAll();
     * // or
     * // Close all modals if ESC key is pressed
     document.addEventListener('keyup', (key) => {
       if (key.keyCode == 27) {
         closeAll();
       }
     });
     * @returns envent close all modals on push esc key
     */
    var closeAll = function () {
      const openModal = document.querySelectorAll(`.${elements.active}`);
      openModal.forEach((modal) => {
        modal.classList.remove(elements.active);
      });
      unFreeze();
    };
    /**
     * generic Class to open targetd modal
     * @function openModal
     * @memberof modalFX
     * @inner
     * @tutorial modalFX.openModal()
     * @example
     * // open  modal on click buton
     *  var largeModal = document.querySelector('.largeModal');
     *largeModal.addEventListener('click', () => {
     * openModal()
     *});
     * @returns envent close all modals on push esc key
     */
    var openModal = function () {
      const modal = this.getAttribute(elements.target);
      freeze();
      document.getElementById(modal).classList.add(elements.active);
    };
    /**
     * generic Class to close targeted modal
     * @function closeModal
     * @access public
     * @memberof modalFX
     * @inner
     * @tutorial modalFX.closeModal()
     * @example
     * // open  modal on click buton
     *  var close = document.querySelector('.close');
     *close.addEventListener('click', () => {
     * closeModal()
     *});
     * @returns envent close current modals
     */
    var closeModal = function () {
      const modal = this.parentElement.id;
      document.getElementById(modal).classList.remove(elements.active);
      unFreeze();
    };

    // Freeze scrollbars
    var freeze = function () {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    };

    var unFreeze = function () {
      document.getElementsByTagName('html')[0].style.overflow = '';
      document.getElementsByTagName('body')[0].style.overflowY = '';
    };

    return {
      init() {
        events();
      }
    };
  }());

  modalFX.init();
}());
