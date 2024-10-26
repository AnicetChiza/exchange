// const countries = [
//     { name: "Rwanda", currencyCode: "RWF", currencyName: "Rwandan Franc", flag: "🇷🇼" },
//     { name: "United States", currencyCode: "USD", currencyName: "US Dollar", flag: "🇺🇸" },
//     { name: "Kenya", currencyCode: "KES", currencyName: "Kenyan Shilling", flag: "🇰🇪" },
//     // Add more countries here
// ];

// const dropdownButton = document.querySelector('.dropdown-button');
// const dropdownContent = document.getElementById('dropdownContent');
// const currencyText = document.getElementById('currency-text');

// // Populate the dropdown with country options
// countries.forEach(country => {
//     const item = document.createElement('div');
//     item.className = 'dropdown-item';
//     item.innerHTML = `${country.flag} ${country.currencyCode} - ${country.currencyName}`;

//     // Set the selected currency when clicked
//     item.addEventListener('click', () => {
//         currencyText.textContent = `${country.flag} ${country.currencyCode} - ${country.currencyName}`;
//         dropdownContent.style.display = 'none';
//         // Change the icon to indicate the dropdown is closed
//         dropdownButton.innerHTML = `<i class="bi bi-chevron-down"></i> ${currencyText.textContent}`;
//     });

//     dropdownContent.appendChild(item);
// });

// // Set the default display to the first country's currency
// currencyText.textContent = `${countries[0].flag} ${countries[0].currencyCode} - ${countries[0].currencyName}`;
// dropdownButton.innerHTML = `<i class="bi bi-chevron-down"></i> ${currencyText.textContent}`;

// // Toggle the dropdown visibility
// dropdownButton.addEventListener('click', () => {
//     const isOpen = dropdownContent.style.display === 'block';
//     dropdownContent.style.display = isOpen ? 'none' : 'block';
//     // Change the icon based on the dropdown state
//     dropdownButton.innerHTML = isOpen ? `<i class="bi bi-chevron-down"></i> ${currencyText.textContent}` : `<i class="bi bi-chevron-up"></i> ${currencyText.textContent}`;
// });

// // Close dropdown if clicked outside
// window.addEventListener('click', (event) => {
//     if (!event.target.matches('.dropdown-button')) {
//         dropdownContent.style.display = 'none';
//         dropdownButton.innerHTML = `<i class="bi bi-chevron-down"></i> ${currencyText.textContent}`;
//     }
// });

const myItems = document.querySelectorAll('.bloc-item');

myItems.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.toggle('active');

        const icon = item.querySelector('.down');
        const iconUp = item.querySelector('.up');

        icon.style.display = isActive ? 'none' : 'block';
        iconUp.style.display = isActive ? 'block' : 'none';
    })
})