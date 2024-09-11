function toggleMenu() {
    const menu = document.getElementById("menu-items");
    const icon = document.getElementById("hamburger-icon");
    menu.classList.toggle("active");
    icon.classList.toggle("active");

    // Change icon to cross when active
    if (icon.classList.contains("active")) {
        icon.innerHTML = '<path d="M7 7L23 23M7 23L23 7" stroke="black" stroke-width="2" stroke-linecap="round"/>';
    } else {
        icon.innerHTML = '<path d="M4 7h22M4 15h22M4 23h22" stroke="black" stroke-width="2" stroke-linecap="round"/>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    filterContent('articles'); 
});

function filterContent(category) {
    const articles = document.querySelectorAll('.article-item');
    const buttons = document.querySelectorAll('.category-button');

    
    articles.forEach(article => {
        article.style.display = 'none';
    });

    
    articles.forEach(article => {
        if (category === 'articles' && article.classList.contains('article')) {
            article.style.display = 'flex'; 
        } else if (category === 'poems' && article.classList.contains('poem')) {
            article.style.display = 'flex'; 
        } else if (category === 'notes' && article.classList.contains('note')) {
            article.style.display = 'flex'; 
        }
    });

    
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.category-button[onclick="filterContent('${category}')"]`).classList.add('active'); // Add active class to the clicked button
}



document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for sidebar links
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); 
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Update the active class immediately on click
            document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Intersection Observer to detect the active section
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                navLinks.forEach(link => link.classList.remove("active"));

                
                const activeLink = document.querySelector(`.sidebar a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, {
        threshold: 0.6 // Trigger when 60% of the section is visible
    });

    // Observe each section
    sections.forEach(section => observer.observe(section));
});


