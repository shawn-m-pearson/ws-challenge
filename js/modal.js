//
// Modal Object
//
const modal = {
  //the modal that will be used
  targ : {},
  //class name of element (or its surrounding element) to activate the modal
  btnClass : 'btnModal',

  //show the modal
  open(ev) {
    // true target must have class of btnModal, else this is a false posative
    //useful for allowing multiple buttons to open the same modal
    if(!ev.target.classList.contains(this.btnClass)) {
      return false;
    }

    this.targ.style.display = 'block';
  },

  //hide the modal
  close() { this.targ.style.display = 'none'; },

  // must run modal.init with the dom objects for start close and modal itself
  init(openBtn, targ = document.querySelector('dialog')) {
    //set dom target as a modal
    this.targ = targ;

    //open and close modal handler inits
    onClassHndl(openBtn,'click', this.open.bind(this));
    //the close button on the modal itself, and so is hardcoded
    onClassHndl('btnClose','click', this.close.bind(this));
  }
};
