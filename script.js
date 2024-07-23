document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadBlogPosts();
    loadReviews();
});

const products = [
    { name: 'tomatoes', price: '$5.00', image: 'images/download.jpeg' },
    { name: 'carrots', price: '$10.00', image: 'images/R.jpeg' },
    { name: 'yellow pears', price: '$15.00', image: 'images/download (1).jpeg' }
];

const blogPosts = [
    { title: 'Post 1', description: 'Description 1', image: 'images/placeholder.avif' },
    { title: 'Post 2', description: 'Description 2', image: 'images/placeholder.avif' }
];

const reviews = [
    { text: 'Review 1', name: 'John Doe', rating: '5 stars' },
    { text: 'Review 2', name: 'Jane Doe', rating: '4 stars' },
    { text: 'Review 3', name: 'Jim Doe', rating: '5 stars' }
];

function loadProducts() {
    const productContainer = document.querySelector('.products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

function loadBlogPosts() {
    const postContainer = document.querySelector('.posts');
    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
        `;
        postContainer.appendChild(postCard);
    });
}

function loadReviews() {
    const reviewContainer = document.querySelector('.reviews-cards');
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <p>${review.text}</p>
            <p>${review.name}</p>
            <p>${review.rating}</p>
        `;
        reviewContainer.appendChild(reviewCard);
    });
}
