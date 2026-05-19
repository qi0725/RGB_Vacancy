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
    const guestViewContains = document.querySelector(".guest-view");
    const userViewContains = document.querySelector(".user-view");
    
    if(guestViewContains && userViewContains)
    {
        guestViewContains.style.display = "none";
        userViewContains.style.display = "flex";
    }
}

function guestView()
{
    const guestViewContains = document.querySelector(".guest-view");
    const userViewContains = document.querySelector(".user-view");
    
    if(guestViewContains && userViewContains) {
        guestViewContains.style.display = "flex";
        userViewContains.style.display = "none";
    }
}

function changeloginstatus()
{
    
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('justLoggedIn');
    
    guestView();

    alert("You have successfully logged out.");
}