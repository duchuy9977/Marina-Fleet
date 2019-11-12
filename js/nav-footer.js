/**
 * Created by ASUS on 20-Oct-19.
 */
// Dropdown Menu Fade
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
        });
});