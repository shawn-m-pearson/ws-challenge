QUnit.test("modal", function( assert ) {
  modal.init('qModalTest');
  let dia = $('dialog');
  let targ1 = $('.qModalTest .test1');
  let targ2 = $('.qModalTest .test2');
  let targ3 = $('dialog .btnClose');

  targ1.click();
  assert.ok( $(dia).css('display') === 'none', "non-btn clicked and nothing happens" );

  targ2.click();
  assert.ok( $(dia).css('display') !== 'none', "open btn clicked and the modal is visible" );

  targ3.click();
  assert.ok( $(dia).css('display') === 'none', "close btn clicked and the modal is closed" );
});
