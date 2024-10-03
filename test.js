var vg_3 = "test.vg.json";

  
  vegaEmbed("#test", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  