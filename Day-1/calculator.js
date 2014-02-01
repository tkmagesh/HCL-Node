function add(){
	function parseArg(x){
		if (!isNaN(x)) return parseInt(x);	
		if (typeof x === "undefined") return 0;
		if (typeof x === "function") return parseArg(x());
		if (!!x.length) return add.apply(this, x);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg([].splice.call(arguments,0,1)) + add.apply(this,arguments);
}