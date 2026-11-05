(function () {
  var p = location.pathname.toLowerCase();
  var ziel = "/";
  if (/pmu|permanent|powder|lips/.test(p)) ziel = "/permanent-make-up";
  else if (/brow|lash|wimper|braue|lifting/.test(p)) ziel = "/brauen-wimpern";
  else if (/wax/.test(p)) ziel = "/waxing";
  else if (/impressum/.test(p)) ziel = "/impressum";
  else if (/datenschutz|privacy/.test(p)) ziel = "/datenschutz";
  location.replace("https://facecolorconcept.de" + ziel);
})();
