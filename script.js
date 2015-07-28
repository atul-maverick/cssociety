// Holds the id of the content to display on load and after each change
var currentContent;

// Hides the inputed content
var hide = function(contentId) {
    
    // Debug
    console.log(contentId + " hidden");
    
    // Hiding input content
    document.getElementById(contentId).style.visibility = "collapse";
};

// Hides current content, updates it, and then shows the inputed content
var display = function(contentId) {
    
    // Hiding currently shown content & updating, if necessary
    if(contentId !== currentContent) {
        
        // Debug
        console.log(contentId + " shown");
        
        // Updating currently shown content
        hide(currentContent);
        currentContent = contentId;
        
        // Showing input content
        document.getElementById(contentId).style.visibility = "visible";
    }
}

// At load time
var landingPage = function() {
    
    // Debug
    console.log("JavaScript loaded");
    
    // Updating and showing landing page
    document.getElementById("landing").style.visibility = "visible";
    currentContent = "landing";
};

// Setting load time function
window.onload = landingPage();