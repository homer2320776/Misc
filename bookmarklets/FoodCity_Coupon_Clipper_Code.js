javascript: (function() {
  function sleep(e) {
    return new Promise(t => setTimeout(t, e))
  }
  async function click() {
    var c = document.getElementById("hdnPageCount").value
    var e = document.getElementById("showMore")
    var t = document.getElementsByClassName("tile-item__coupon-buttons")
    for (i = 1; i < c; i++) {e.click();await sleep(2000)}
    for (i = 0; i < t.length; i++) t[i].children[0].click()
  }
  click();
}())