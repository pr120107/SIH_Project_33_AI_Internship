// Custom JS for Student Home Page and Navigation

document.addEventListener('DOMContentLoaded', function () {
    // Navigation: load pages
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const text = link.textContent.trim();
            if (text === 'Profile') {
                e.preventDefault();
                window.location.href = 'profile.html';
            } else if (text === 'My Applications') {
                e.preventDefault();
                window.location.href = 'application.html';
            } else if (text === 'Dashboard') {
                e.preventDefault();
                window.location.href = 'alhome.html';
            } else if (text.startsWith('Logout')) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    // Redirect to login page or home
                    window.location.href = 'home.html';
                }
            }
        });
    });

    // Function to check login status
    function checkLoginStatus() {
        // Assuming localStorage key "isLoggedIn" is set to "true" after login/signup
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            // User is logged in → Redirect to alhome.html
            window.location.href = 'alhome.html';
        } else {
            // User is not logged in → Redirect to home.html
            window.location.href = 'home.html';
        }
    }

    // Call the function on page load
    window.onload = checkLoginStatus;


    $(".sign-up--btn").click(function () {
        $(".sign-up-form").css("display", "block");
    });

    // Apply Now button
    document.querySelectorAll('.site__btn-2.btn-sm').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Your application has been submitted!');
        });
    });

    // Highlight profile card if incomplete
    document.querySelectorAll('.dashboard-card').forEach(function (card) {
        if (card.textContent.includes('Complete your profile')) {
            card.style.border = '2px solid #FFD700';
            card.style.boxShadow = '0 0 10px #FFD70055';
        }
    });
});