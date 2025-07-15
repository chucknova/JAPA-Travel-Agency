// Fixed bookmark functionality - replace the relevant parts in your script

// Function to get the appropriate SVG based on state (FIXED LOGIC)
function getBookmarkSVG(saved) {
    if (saved) {
        // When saved, show FILLED (red) bookmark
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
  stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="lucide lucide-bookmark-icon lucide-bookmark">
  <defs>
    <linearGradient id="glossyFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.7" />
      <stop offset="50%" stop-color="white" stop-opacity="0.2" />
      <stop offset="100%" stop-color="white" stop-opacity="0.05" />
    </linearGradient>
  </defs>
  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" fill="#E71D36" class="bookmark-fill"/>
</svg>`;
    } else {
        // When not saved, show UNFILLED (gradient) bookmark
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
  stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="lucide lucide-bookmark-icon lucide-bookmark">
  <defs>
    <linearGradient id="glossyFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.7" />
      <stop offset="50%" stop-color="white" stop-opacity="0.2" />
      <stop offset="100%" stop-color="white" stop-opacity="0.05" />
    </linearGradient>
  </defs>
  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" fill="url(#glossyFill)" class="bookmark-fill"/>
</svg>`;
    }
}

// Function to check if an item is saved
function isSaved(id) {
    const savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
    return savedItems.includes(id);
}

// Updated renderPackages function with initial state restoration
function renderPackages(packagesToRender = subPackages) {
    // Mapping through the provided packages to render on the DOM
    const displaySubPk = packagesToRender.map((subPkg, index) => {
        // Find the original index for routing purposes
        const originalIndex = subPackages.findIndex(pkg => pkg === subPkg);
        
        // Get the correct initial bookmark state
        const isCurrentlySaved = isSaved(subPkg.id);
        const bookmarkIcon = getBookmarkSVG(isCurrentlySaved);

        return `  <div class="travel-package-card-tp">
        <div class="travel-package-upper" style="background-image: url(${subPkg.packageThumbnail}); position: relative;">

  <!-- Duration tag: top-left -->
  <div class="duration-tag" style="position: absolute; top: 15px; left: 15px;">
    ${subPkg.duration.days} days
  </div>

  <!-- SVG Heart icon: top-right -->
  <div class="heart-icon" id="bookmark-${subPkg.id}" style="position: absolute; top: 15px; right: 15px; cursor: pointer;">
    ${bookmarkIcon}
  </div>

</div>

        <div class="travel-package-lower">
            <div class="package-location-name-desc" id="pkgIndex-${originalIndex}" data-package-index="${originalIndex}">
                <p class="pk-location">${subPkg.destination}</p>
                <p style="cursor: pointer;" class="pk-name">${subPkg.name}</p>
                <p class="pk-desc">${subPkg.shortDesc}
                </p>
            </div>

            <div class="package-price-ratings">
                <h3 class="pk-price">${subPkg.price.currency} ${subPkg.price.amount}</h3>
                <P class="pk-ratings">⭐ 4.8 (152 reviews)</P>
            </div>
        </div>
    </div>`
    })

    // Rendering travel packages in the DOM
    document.getElementById("bottom-pk").innerHTML = displaySubPk.join('')

    // Function to route user to sub travel packages page
    function routeToDetails(packageIndex) {
        console.log("Selected package index:", packageIndex);
        console.log("Selected Package:", subPackages[packageIndex]);
        console.log("test parent PackageId:", packageId);

        window.location.href = `travel-package-detail.html?parentPackageID=${packageId}&packageId=${packageIndex}`;
    }

    // Add click event listeners to all package cards
    document.querySelectorAll('.package-location-name-desc').forEach(card => {
        card.addEventListener('click', function () {
            const packageIndex = this.getAttribute('data-package-index');
            routeToDetails(packageIndex);
        });
    });
}

// Updated click event handler
document.addEventListener('click', function (event) {
    if (event.target.closest('.heart-icon')) {
        const heartIcon = event.target.closest('.heart-icon');
        if (heartIcon.id.startsWith('bookmark-')) {
            const packageId = heartIcon.id.replace('bookmark-', '');
            console.log('Package ID:', packageId);

            // Function to update button state
            function updateButtonState() {
                const saved = isSaved(packageId);
                heartIcon.innerHTML = getBookmarkSVG(saved);
            }

            // Toggle saved state
            let savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');

            if (isSaved(packageId)) {
                // Unsave the item
                savedItems = savedItems.filter(id => id !== packageId);
                console.log('Removed:', savedItems);
            } else {
                // Save the item
                savedItems.push(packageId);
                console.log('Added:', savedItems);
            }

            localStorage.setItem('savedItems', JSON.stringify(savedItems));
            updateButtonState(); // Update button appearance after state change
        }
    }
});