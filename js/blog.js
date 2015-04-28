$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("fiS8Iexr1h5PT9znMHRLbjOzRqHovmMfaGKTDHCi", "GZlWlwLav9WaaLBm41PIAQqFTpTUGwAVs1drUwOV");
 
    var TestObject = Parse.Object.extend("TestObject");
<<<<<<< HEAD
	var Blog = Parse.Object.extend("Blog");
	var Blogs = Parse.Collection.extend({
    model: Blog
});
var blogs = new Blogs();
blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});
    var testObject = new TestObject();
	
	
    testObject.save({foo: "bar"}).then(function(object) {
=======
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
>>>>>>> origin/gh-pages
      alert("yay! it worked");
    });
	var Blog = Parse.Object.extend("Blog");
	var Blogs = Parse.Collection.extend({
    model: Blog
	});
	var blogs = new Blogs();
	blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});
 
});