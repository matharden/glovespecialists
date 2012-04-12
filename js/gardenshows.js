
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

  
var shows2012 = [
{
	name:		'Highnam Court Spring Fair',
	start:		'2012/04/28',
	end:		'2012/04/29',
	location:	'Two miles west of central Gloucester [A40], GL2 8DP',
	stand:		'',
	notes:		''
},
{
	name:		'Malvern Spring Gardening Show',
	start:		'2012/05/10',
	end:		'2012/05/13',
	location:	'Three Counties Showground, Malvern, WR13 6NW',
	stand:		'In the Gardeners Shopping Pavilion',
	notes:		'Thursday 10 May RHS members only'
},
{
	name:		'Devon County Show',
	start:		'2012/05/17',
	end:		'2012/05/19',
	location:	'WestPoint Showgrounds, Clyst St Mary, Exeter, EX5 1DJ',
	stand:		'At entrance of Floral Marquee',
	notes:		''
},
{
	name:		'Kent Garden Show',
	start:		'2012/06/02',
	end:		'2012/06/05',
	location:	'Kent Showgrounds, Detling, Maidstone, ME14 3JF',
	stand:		'In the covered hall',
	notes:		''
},
{
	name:		'The Garden Show at Stansted Park',
	start:		'2012/06/15',
	end:		'2012/06/17',
	location:	'Rowland’s Castle, near Chichester, PO9 6DX',
	stand:		'',
	notes:		''
},
{
	name:		'Taunton Flower Show',
	start:		'2012/08/03',
	end:		'2012/08/04',
	location:	'Vivary Park, Taunton, TA1 3JW',
	stand:		'Outside the Flower Tent next to the Main Ring',
	notes:		''
},
{
	name:		'Shrewsbury Flower Show',
	start:		'2012/08/10',
	end:		'2012/08/10',
	location:	'Quarry Park, Shrewsbury, SY1 1RN',
	stand:		'At the top of  Avenue B, near the Flower Marquee',
	notes:		''
},
{
	name:		'Bath and West Flower Show [formerly National Amateur Gardening Show]',
	start:		'2012/08/31',
	end:		'2012/09/02',
	location:	'Bath and West Showground, Shepton Mallet, BA4 6QN',
	stand:		'In the Garden Inspirations Pavilion',
	notes:		''
},
{
	name:		'Malvern Autumn Country and Garden Show',
	start:		'2012/09/29',
	end:		'2012/09/30',
	location:	'Three Counties Showground, Malvern, WR13 6NW',
	stand:		'In The Countryside Shopping Pavilion',
	notes:		''
}
];


