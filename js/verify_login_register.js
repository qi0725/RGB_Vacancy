if
(
    localStorage.getItem('isLoggedIn') === 'true'
    &&
    (document.body.classList.contains('page-login') || document.body.classList.contains('page-register'))
)

{
    window.location.href = 'index.html';
}

else
{
    const loginForm = document.querySelector('form[name="login"]');
    const registerForm = document.querySelector('form[name="register"]');

    if (loginForm)
    {
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

    if (registerForm)
    {
        registerForm.addEventListener
        (
            'submit',
            function(event)
            {
                event.preventDefault();

                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const rePassword = document.getElementById('re-password').value;
                const phone = document.getElementById('phone').value;
                const city = document.getElementById('city').value;
                const postcode = document.getElementById('postcode').value;
                const state = document.getElementById('state').value;

                if (password !== rePassword)
                {
                    alert("Passwords do not match! Please try again.");
                    return;
                }

                if (email && password && rePassword && phone && city && postcode && state)
                {
                    const registerBtn = document.querySelector('.register-btn-register'); // 注意：请确保你的 HTML 里按钮的 class 是这个

                    registerBtn.innerText = "Success! Logging in...";
                    registerBtn.style.opacity = "0.8";

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
                    alert("Please fill in all the required fields.");
                }
            }
        );
    }
}