
/*$(function(){
	var today = new Date();
	var showDate = new Date();
	var showDate2 = new Date();

	$.getJSON("/_assets/data/shows2010.js", function(data){
		with(data){
			console.info(shows.length+" shows");
			var arrDate,arrDate2;
			for (x in shows) {

				arrDate = shows[x].dateStart.split("/");
				arrDate2 = shows[x].dateEnd.split("/");

				showDate.setFullYear(arrDate[2],(arrDate[1]-1),arrDate[0]);
				showDate2.setFullYear(arrDate2[2],(arrDate2[1]-1),arrDate2[0]);

				console.info(showDate);

				if (showDate>today) {
					console.info("Next show: "+shows[x].name);
					break;
				} else if (showDate<today && showDate2>today) {
					console.info("On now: "+shows[x].name);
				}
			}
		}
	});

});

function jsDate(strDate) {

	var arrDate = strDate.split("/");

	return arrDate[2]+","+(arrDate[1]-1)+","+arrDate[0];
}*/


// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
  
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
      
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
        
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

  
var shows = [
{
name: 'Malvern Spring Gardening Show',
start: '2013-05-09',
end: '2013-05-12',
notes: 'Thursday is for <abbr title="Royal Horticultural Society">RHS</abbr> members only. Friday to Sunday is open to the general public.',
stand: 'In the Gardeners Shopping Pavilion',
location: 'Three Counties Showground, Malvern WR13 6NW'
},
{
name: 'Devon County Show',
start: '2013-05-16',
end: '2013-05-18',
stand: 'At entrance of Floral Marquee, WestPoint',
location: 'Showgrounds, Clyst St Mary, Exeter, EX5 1DJ'
},
{
name: 'Taunton Flower Show',
start: '2013-08-02',
end: '2013-08-03',
stand: 'Outside the Flower Tent next to the Main Ring',
location: 'Vivary Park, Taunton, TA1 3JW'
},
{
name: 'Shrewsbury Flower Show',
start: '2013-08-09',
end: '2013-08-10',
stand: 'At the top of Avenue B, near the Flower Marquee ',
location: 'Quarry Park, Shrewsbury, SY1 1RN'
},
{
name: 'Malvern Autumn Country and Garden Show',
start: '2013-09-28',
end: '2013-09-29',
stand: 'In The Countryside Shopping Pavilion',
location: 'Three Counties Showground, Malvern WR13 6NW'
}
];
