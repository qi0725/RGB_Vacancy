if
(
    (localStorage.getItem('isLoggedIn') === 'true' ||localStorage.getItem('isLoggedIn') === 'true')
    &&
    (document.body.classList.contains('page-login') || document.body.classList.contains('page-register'))
)
    {
        window.location.href = 'index.html';
    }

else
{
    const loginForm = document.querySelector('form[name="login"]');

    loginForm.addEventListener
    (
        'submit',

        function(event)
        {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password)
            {

                //Generate From Gemini(It said can be more cool)
                const loginBtn = document.querySelector('.login-btn-login');
                loginBtn.innerText = "Logging in...";
                loginBtn.style.opacity = "0.8";

                localStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('justLoggedIn', 'true');
                
                setTimeout
                (
                    function()
                    {
                        let returnUrl = sessionStorage.getItem('returnUrl');

                        if (returnUrl)
                        {
                            window.location.href = returnUrl;
                            sessionStorage.removeItem('returnUrl');
                        }

                        else
                        {
                            window.location.href = 'index.html';
                        }
                    }
                    , 500
                );
            }

            else
            {
                alert("Please enter your email and password.");
            }
        }
    );
}
