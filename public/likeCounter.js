export function displayNav() {
            let savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
            let bookmarkCount = document.getElementById('bookmark-count')
            // Function to update bookmark count in navbar
            function updateBookmarkCount() {
                savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
                bookmarkCount.innerHTML = savedItems.length;
            }

            // Initial count update
            updateBookmarkCount();
            document.getElementById('bookmark-btn').addEventListener('click', () => {
                window.location.href = 'favorite-travel-packages.html'
            })
        }