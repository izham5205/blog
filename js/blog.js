$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("fiS8Iexr1h5PT9znMHRLbjOzRqHovmMfaGKTDHCi", "GZlWlwLav9WaaLBm41PIAQqFTpTUGwAVs1drUwOV");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});