
function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("lowpoverty");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/shared/GJQWBSM29?:display_count=n&:origin=viz_share_link";
    // An object that contains options specifying how to embed the viz
    var options = {
      width: '600px',
      height: '600px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }
  