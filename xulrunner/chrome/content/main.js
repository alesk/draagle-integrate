function doNav(obj){
  var i, url,
      args = window.arguments[0].QueryInterface(Components.interfaces.nsICommandLine),
      drugs=[];

  for(i=0; i < args.length; i += 1) {
    drugs.push(args.getArgument(i));
  }

  url = "http://draagle.medicina-danes.si/#!/basket/new/"+drugs.join("+")+"/"
  // note the firstChild is the menupopup element
  alert(url);
  document.getElementById('myFrame').setAttribute('src', url);
}
