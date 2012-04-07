var num = 0;

function cycleThru(i) {
	
	
	num = num+1;
	
	if (num == closeUpArr.length) {
		num = 0
	}
		
	if (typeof i !== 'undefined') {
		num = i
	}
	
	document.getElementById('closeup').src = closeUpArr[ num ].src;
	}

function swap(imgref, imgto)
	{
	eval ('document.' + imgref + '.src = imgarr[' + imgto + '].src');
	return true;
	}


function openWin(url)
	{
	var theWin = window.open(url,'editwin','width=500,height=300');
	theWin.focus();
	}

function findObj(n, d)
	{
	var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document); return x;
	}

function tmt_findObj(n)
	{
	var x,t; if((n.indexOf("?"))>0&&parent.frames.length){t=n.split("?");
	x=eval("parent.frames['"+t[1]+"'].document.getElementById('"+t[0]+"')");
	}else{x=document.getElementById(n)}return x;
	}

function showHide()
	{
	var i,p,v,obj,args=showHide.arguments;if(document.getElementById){
	for (i=0; i<(args.length-2); i+=3){ obj=tmt_findObj(args[i]);v=args[i+2];
	v=(v=='show')?'visible':(v='hide')?'hidden':v;
	if(obj)obj.style.visibility=v;}} else{
	for (i=0; i<(args.length-2); i+=3) if ((obj=findObj(args[i]))!=null) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
	obj.visibility=v; }}
	}