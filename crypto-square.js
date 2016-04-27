//4 function total needed
// var *object* = new *class*
var Crypto = function(text) {
	// stores the string for use elsewhere
	this.message = text; 
};

Crypto.prototype.normalizePlaintext = function(){
	return this.message.replace(/[\W]/g, "").toLowerCase(); 
// replace(/[^0-9a-zA-Z]/g, ''): replaces all characters that are not digits and alpha characters
};


Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil (Math.sqrt(length));

};
module.exports = Crypto;
