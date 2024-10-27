const countries = [
    { name: "Rwanda", currencyCode: "RWF", currencyName: "Rwandan Franc", flag: "🇷🇼" },
    { name: "United States", currencyCode: "USD", currencyName: "US Dollar", flag: "🇺🇸" },
    { name: "Kenya", currencyCode: "KES", currencyName: "Kenyan Shilling", flag: "🇰🇪" },
    { name: "European Union", currencyCode: "EUR", currencyName: "Euro", flag: "🇪🇺" }
    // Ajoutez d'autres pays ici
];

function populateDropdown(dropdownContent, currencyText, dropdownButton) {
    countries.forEach(country => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `${country.flag} ${country.currencyCode} - ${country.currencyName}`;

        item.addEventListener('click', () => {
            currencyText.textContent = `${country.flag} ${country.currencyCode} - ${country.currencyName}`;
            dropdownContent.style.display = 'none';
        });

        dropdownContent.appendChild(item);
    });
}

const dropdownButton1 = document.getElementById('dropdownButton1');
const dropdownContent1 = document.getElementById('dropdownContent1');
const currencyText1 = document.getElementById('currency-text1');
populateDropdown(dropdownContent1, currencyText1, dropdownButton1);

const dropdownButton2 = document.getElementById('dropdownButton2');
const dropdownContent2 = document.getElementById('dropdownContent2');
const currencyText2 = document.getElementById('currency-text2');
populateDropdown(dropdownContent2, currencyText2, dropdownButton2);

document.querySelectorAll('.bloc-item').forEach(item => {
    const dropdownButton = item.querySelector('.dropdown-button');
    const dropdownContent = item.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', () => {
        const isOpen = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isOpen ? 'none' : 'block';
    });
});

document.querySelector('.swap-button').addEventListener('click', () => {
    // Échange les valeurs de texte des devises
    const tempText = currencyText1.textContent;
    currencyText1.textContent = currencyText2.textContent;
    currencyText2.textContent = tempText;
});


// const myItems = document.querySelectorAll('.bloc-item');

// myItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const isActive = item.classList.toggle('active');

//         const icon = item.querySelector('.down');
//         const iconUp = item.querySelector('.up');

//         icon.style.display = isActive ? 'none' : 'block';
//         iconUp.style.display = isActive ? 'block' : 'none';
//     })
// })