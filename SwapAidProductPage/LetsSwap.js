$("#specs").click(function () {
  $(".IR2").hide();

  $("#specs").replaceWith("<h6 id='specsclicked'>SPECS<h6>");
  $("#IR").replaceWith(
    "<div class='col-4 offset-2 SP IR'><ul id='OL'><li id='lispec'>Condition:           </li><span id='CI'>Working - Good</span></li><li id='lispec'>Price Range:           </li><span id='PRI'>10$ - 50$</span></li><li id='lispec'>Size:           </li><span id='SRI'> 3 feet tall </span></li><li id='lispec'>Weight :           </li><span id='WRI'> 3 Pounds</span></li></ul><h6>Why trading:           </li><span id='TradeReasonInput'><h6>Going to buy a new one</span></h6></div>"
  );
});
$("#trade").click(function () {
  $("#specsclicked").replaceWith("<h6 id='specs'>SPECS<h6>");
  $("#trade").replaceWith("<h6 id='tradeclicked'>TRADE<h6>");
  $(".IR").replaceWith(
    "<div class='col-4 offset-2 SP IR2'><div><h6>Traders Terms</h6></div><hr><div><p>Items accepted for Swap</p></div><div><ul id='IW'><li>Tennis Shoes Size 9 Male</li><li>Canned goods/Beans/fruits</li><li>Batteries 24 pack triple A</li></div></div>"
  );
});
