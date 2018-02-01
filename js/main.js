// app global object
var app = new Vue({
  el: '#app',
  data: {
    v : {},
    cara : {images:[]},
    _ : {},
    loaded : false
  }
});


//after load
window.onload = function(){

  //load data
  loadJSON(function(response) {
  // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    app.v = actual_JSON;
    app.loaded = true;
  });

  //init modal
  //modal.init('prodArea');
  modal.init('prodArea');

  //init carousal
  cara.init();
}
