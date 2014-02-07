var assert = require("assert");
describe("A simple test",function(){
	it("should always pass",function(done){
		setTimeout(function(){
			assert.equal(true,true);	
			done();
		},1500);
		
		
	});
});