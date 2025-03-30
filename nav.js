$(document).ready(function() {
    // Load the navbar from nav.html
    $("#nav-placeholder").load("/nav.html", function() {
        // After the navbar is loaded, add active class based on current page
        var currentUrl = window.location.pathname;

        // Loop through each nav-link in the loaded navbar and check if it matches the current URL
        $('nav .nav-link').each(function() {
            // If the href matches the current URL, add the 'active' class
            if (this.href.includes(currentUrl)) {
                $(this).addClass('active');
            }
        });
    });
});
