function myFirebaseUserAuth() {
    // Firebase Auth State Change Handler
    firebase.auth().onAuthStateChanged((user) => {
      const usernameElement = document.getElementById("username");

      if (user) {
        console.log("Current user:", user.email);

        // Get the first initial from display name or email
        const displayName = user.displayName || user.email;
        const firstInitial = displayName.charAt(0).toUpperCase();

        // Replace the button content with profile picture and dropdown
        usernameElement.innerHTML = `
      <div class="user-profile-container">
        <div class="profile-picture" id="profilePicture">
          <span class="profile-initial">${firstInitial}</span>
        </div>
        <div class="profile-dropdown" id="profileDropdown">
          <div class="dropdown-header">
            <div class="dropdown-profile-pic">
              <span class="dropdown-initial">${firstInitial}</span>
            </div>
            <div class="dropdown-user-info">
              <div class="dropdown-name">${user.displayName || 'Hello, there! 👋🏽'}</div>
              <div class="dropdown-email">${user.email}</div>
            </div>
          </div>
          <hr class="dropdown-divider">
          <button class="dropdown-item" id="route-to-trips">
           <svg class="logout-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
            </svg>
            My Upcoming Trips
          </button>
          <hr class="dropdown-divider">
          <button class="dropdown-item" id="logoutBtn">
            <svg class="logout-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="16,17 21,12 16,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Log Out
          </button>
        </div>
      </div>
    `;

        // Remove the login-button class and add user-profile class
        usernameElement.className = "user-profile";

      } else {
        console.log("No user signed in.");
        // Reset to login button
        usernameElement.innerHTML = '<a href="user-auth.html">Log In</a>';
        usernameElement.className = "login-button";
      }
    });

    // Toggle dropdown function
    function toggleDropdown() {
      const dropdown = document.getElementById("profileDropdown");
      dropdown.classList.toggle("show");
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
      const userProfile = document.querySelector('.user-profile-container');
      const dropdown = document.getElementById("profileDropdown");

      if (userProfile && !userProfile.contains(event.target)) {
        dropdown?.classList.remove("show");
      }
    });

    // Logout function with event listener
    function handleLogout() {
      firebase.auth().signOut().then(() => {
        console.log("User signed out successfully");
        // Redirect to home page or refresh
        window.location.reload();
      }).catch((error) => {
        console.error("Error signing out:", error);
      });
    }

    // Routing users to upcoming trips / booking history
    function handleUpcomingTripsRoute() {
      window.location.href = './bookinghistory.html'
    }

    // Add event listener for logout button and profile picture
    document.addEventListener('DOMContentLoaded', function () {
      // Use event delegation since elements are dynamically created
      document.addEventListener('click', function (event) {
        // Handle logout button click
        if (event.target.closest('#logoutBtn')) {
          handleLogout();
        }
        if (event.target.closest('#route-to-trips')) {
          handleUpcomingTripsRoute();
        }

        // Handle profile picture click
        if (event.target.closest('#profilePicture')) {
          toggleDropdown();
        }
      });
    });

  }
  myFirebaseUserAuth()