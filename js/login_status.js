const loginLinks = document.querySelectorAll('a[href="login.html"]');

loginLinks.forEach
(
    function(click_link)
    {
        click_link.addEventListener
        (
            'click',

            function(event)
            {
                sessionStorage.setItem('returnUrl', window.location.href);
            }
        );
    }
);

document.addEventListener
(
    'DOMContentLoaded',

    function()
    {
        
        if (sessionStorage.getItem('justLoggedIn') === 'true')
        {
            UserView();

            sessionStorage.removeItem('justLoggedIn');
        }

        else if (localStorage.getItem('isLoggedIn') === 'true')
        {
            UserView();
        }
    }
);

function UserView()
{
    var guestView = document.querySelector(".guest-view");
    var userView = document.querySelector(".user-view");
    
    if(guestView && userView)
    {
        guestView.style.display = "none";
        userView.style.display = "flex";
    }
}

function guestView()
{
    var guestView = document.querySelector(".guest-view");
    var userView = document.querySelector(".user-view");
    
    if(guestView && userView) {
        guestView.style.display = "flex";
        userView.style.display = "none";
    }
}

function changeloginstatus()
{
    
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('justLoggedIn');
    
    guestView();

    alert("You have successfully logged out.");
}