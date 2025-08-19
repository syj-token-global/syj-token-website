// Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Copy Token Address
document.querySelector('.copy-btn').addEventListener('click', async () => {
    const address = document.querySelector('.token-address code').textContent;
    await navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
});

// Newsletter Form
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    // Add your newsletter signup logic here
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing!');
});

// Loading Animation
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Cookie Notice
const cookieNotice = document.getElementById('cookie-notice');
document.getElementById('accept-cookies').addEventListener('click', () => {
    cookieNotice.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

if (!localStorage.getItem('cookiesAccepted')) {
    cookieNotice.style.display = 'block';
}

// Contact Form
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    e.target.reset();
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Language Switcher
document.getElementById('language-switcher').addEventListener('change', (e) => {
    const lang = e.target.value;
    // Add translation logic here
    console.log('Language changed to:', lang);
});

// Price Ticker
async function updatePriceData() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        document.getElementById('token-price').textContent = `$${data.price}`;
        document.getElementById('price-change').textContent = `${data.change}%`;
        document.getElementById('market-cap').textContent = `$${data.marketCap}`;
    } catch (error) {
        console.error('Failed to fetch price data:', error);
    }
}

// Update price every 30 seconds
setInterval(updatePriceData, 30000);
updatePriceData();
