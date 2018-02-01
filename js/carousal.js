//
// carousal Object
//
const cara = {
  // this is the index of the focused element in the carousal
  idxCara : 0,

  //this is the engine that actually moves the element around
  move() {
    let caraList = document.getElementsByClassName('caraList')[0];
    let idxList = document.getElementsByClassName('idxList')[0];
    const idx = this.idxCara;

    //do we even need to do anything else?
    if(idxList === undefined)
      return false;

    // cannot use ES6 'Symbol.iterator' here as some versions of Edge cannot use it w/ getElementsByClassName lists
    // loop through the list of index nav items, remove 'selected' except for selected element
    Array.from(idxList.children).forEach(function(navItm, navIdx){
      navItm.classList.remove('selected');
      if( idx === navIdx) {
          navItm.classList.add('selected');
      }
    });

    // maths to move the carousal to the correct position, let css do the animation
    caraList.style.left = -1 * idx*363 + 'px';
  },

  // whenever a new set of elements is loaded, some things must be done
  reset(ev) {
    let idxList = document.getElementsByClassName('idxList')[0];
    //find the appropriate elements to put into the carousal
    let found = app.v.groups.find(function(el){
        return el.id === ev.target.parentElement.dataset.id;
    });

    //set the app data for nav...if its empty set some default to prevent vue framework from complaining
    app.cara = found || {images:[]};

    //set the focus to the first element and then move to that element
    this.idxCara = 0;
    this.move();
  },

  // move the focus foward one
  foward() {
    //did we loop around?
    if(this.idxCara >= app.cara.images.length-1) {
      this.idxCara = 0;
    }
    else {
      this.idxCara++;
    }
    this.move();
  },

  //move the focus back one
  backward() {
    //did we loop around?
    if(this.idxCara <= 0) {
      this.idxCara = app.cara.images.length-1;
    }
    else {
      this.idxCara--;
    }
    this.move();
  },

  //move focus to any element you want
  goToIndex(ev) {
    if(app.cara === undefined) {
      return false;
    }

    //find the proper index based on the activated nav element
    let idx = Number(ev.target.innerHTML) || 0;
    this.idxCara = idx;
    this.move();
  },

  //there are no paramaters to begin, but event handlers must be bound to the proper dom elements
  init() {
    // Start carousal
    onClassHndl('prodDetList','click', this.reset.bind(this));

    // Right carousal
    onClassHndl('btnRight', 'click', this.foward.bind(this));

    // left carousal
    onClassHndl('btnLeft','click', this.backward.bind(this));

    // Index carousal
    onClassHndl('idxList','click', this.goToIndex.bind(this));
  }
};
