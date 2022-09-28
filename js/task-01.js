const menuItems = document.querySelectorAll('.item');
console.log(`Number of categories:`, menuItems.length);

menuItems.forEach(item => {
    console.log(`Category:`, item.firstElementChild.textContent);
    console.log(`Elements:`, item.querySelectorAll('li').length);
})


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5