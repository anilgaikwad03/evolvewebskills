// ========== STICKY NAVIGATION ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
    }
});

// ========== MOBILE MENU ==========
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

function openMenu() {
    mobileMenu.classList.add('translate-x-0');
    mobileMenu.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
    document.body.style.overflow = '';
}

if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);

// Close menu when clicking on links
document.querySelectorAll('#mobileMenu a').forEach(link => {
    if (link) link.addEventListener('click', closeMobileMenu);
});

// ========== ACTIVE NAVIGATION ON SCROLL ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active', 'text-primary');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active', 'text-primary');
        }
    });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            closeMobileMenu();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
                return;
            }
            counter.innerText = Math.floor(current) + (counter.innerText.includes('%') ? '%' : '+');
            requestAnimationFrame(updateCounter);
        };
        
        updateCounter();
    });
}

// ========== OBSERVER FOR COUNTERS ==========
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const counterSection = document.querySelector('.hero-stats');
if (counterSection) {
    counterObserver.observe(counterSection);
}

// ========== COURSE DATA ==========
const coursesData = [
    {
        title: "Full Stack Java Development",
        description: "Master Java, Spring Boot, Hibernate, React, and become a complete full stack developer with enterprise-level skills.",
        duration: "180 Days",
        students: "500+",
        projects: "5 Projects",
        image: "./images/JFSD.png",
        price: "19999",
        originalPrice: "30000",
        badge: "Most Popular"
    },
    {
        title: "Core Java",
        description: "Build strong foundation in Java programming with object-oriented concepts, data structures, and algorithms.",
        duration: "30 Days",
        students: "300+",
        projects: "2 Projects",
        image: "./images/CoreJava.png",
        price: "2499",
        originalPrice: "5000",
        badge: "Beginner Friendly"
    },
    {
        title: "Advanced Java",
        description: "Master J2EE, Servlets, JSP, JDBC, and enterprise-level Java development concepts.",
        duration: "30 Days",
        students: "250+",
        projects: "2 Projects",
        image: "./images/AdvancedJava.png",
        price: "2499",
        originalPrice: "5000",
        badge: "Intermediate"
    },
    {
        title: "Spring Boot with Microservices",
        description: "Learn Spring Boot, Spring MVC, Spring Data JPA, and Microservices architecture.",
        duration: "45 Days",
        students: "200+",
        projects: "3 Projects",
        image: "./images/SBMS.png",
        price: "4999",
        originalPrice: "9000",
        badge: "Advanced"
    },
    {
        title: "Web Development",
        description: "Master HTML, CSS, JavaScript, React, and modern web development practices.",
        duration: "45 Days",
        students: "400+",
        projects: "4 Projects",
        image: "./images/WebDev.png",
        price: "2999",
        originalPrice: "5000",
        badge: "Trending"
    },
    {
        title: "React JS",
        description: "Build modern web applications with React hooks, Redux, and latest frontend technologies.",
        duration: "30 Days",
        students: "350+",
        projects: "3 Projects",
        image: "./images/ReactJS.png",
        price: "2999",
        originalPrice: "5000",
        badge: "In Demand"
    },
    {
        title: "Oracle SQL",
        description: "Master database concepts, SQL queries, PL/SQL, and database optimization.",
        duration: "20 Days",
        students: "200+",
        projects: "1 Project",
        image: "./images/Oracle.png",
        price: "1999",
        originalPrice: "3000",
        badge: "Essential"
    },
    {
        title: "Java Real-Time Project",
        description: "Build enterprise-level applications with real-world requirements and best practices.",
        duration: "60 Days",
        students: "150+",
        projects: "1 Major Project",
        image: "./images/JRTP.png",
        price: "For 2+ Yrs Experience",
        badge: "Professional"
    }
];

// ========== SERVICES DATA ==========
const servicesData = [
    {
        title: "Java Training",
        description: "Best Java training institute in Solapur offering comprehensive Java programming courses.",
        features: ["Core Java", "Advanced Java", "Spring Boot", "Microservices", "Full Stack Development"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format"
    },
    {
        title: "Website Designing",
        description: "Professional and affordable web design services with responsive designs.",
        features: ["Responsive Design", "UI/UX Design", "Bootstrap/TailwindCSS", "Cross-Browser Compatible"],
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&auto=format"
    },
    {
        title: "Final Year Project",
        description: "Dedicated support for IT students for mini and final-year projects.",
        features: ["Idea Discussion", "End-to-End Guidance", "Coding Explanation", "Viva Preparation"],
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&auto=format"
    }
];

// ========== PLACEMENT DATA ==========
const placementData = [
    { company: "Infosys", name: "Ajay Deshmukh", role: "Software Engineer", package: "6.5 LPA" },
    { company: "TCS", name: "Neha Patil", role: "Frontend Developer", package: "5.8 LPA" },
    { company: "Wipro", name: "Rohit Jadhav", role: "Java Developer", package: "7.2 LPA" },
    { company: "Accenture", name: "Priya Sharma", role: "Full Stack Developer", package: "8.5 LPA" }
];

// ========== TESTIMONIALS DATA ==========
const testimonialsData = [
    {
        name: "Ajay Deshmukh",
        role: "Software Engineer at Infosys",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "The Java Full Stack course at EvolveIT was a game-changer for my career. The instructors are industry experts, and the live projects gave me the confidence to crack interviews. I got placed with a 6.5 LPA package!"
    },
    {
        name: "Neha Patil",
        role: "Frontend Developer at TCS",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Best decision I ever made! The curriculum is up-to-date with industry requirements, and the placement team's support was incredible. Within 2 months of completing the course, I secured a position at TCS."
    },
    {
        name: "Rohit Jadhav",
        role: "Java Developer at Wipro",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Small batch sizes ensure personalized attention. The mentors helped me build a strong portfolio, and the interview preparation sessions were top-notch. Highly recommended for anyone serious about IT careers."
    }
];

// ========== FAQ DATA ==========
const faqData = [
    { 
        question: "What courses do you offer at Evolve IT Solapur?", 
        answer: "We specialize in Java programming and related technologies. Our courses include beginner to advanced levels, covering Core Java, Advanced Java, Java frameworks (Spring, Hibernate), Java EE, Web Development, and Full Stack Development." 
    },
    { 
        question: "What are the prerequisites for joining the course?", 
        answer: "No strict prerequisites for beginners. Basic knowledge of programming concepts can be helpful, but many courses are designed for those new to programming." 
    },
    { 
        question: "Will I get practical experience?", 
        answer: "Yes! Our training programs emphasize practical, hands-on learning. You'll work on real-world projects, assignments, and coding exercises to build a solid foundation in Java programming." 
    },
    { 
        question: "Do you provide placement assistance?", 
        answer: "Yes, we have a dedicated placement cell that provides resume building, mock interviews, and connects you with top hiring partners. Our placement rate is 95%." 
    },
    { 
        question: "Is there a certification after completion?", 
        answer: "Yes, upon successful completion of the course, you will receive a globally recognized Certificate of Completion that validates your skills and enhances your job prospects." 
    },
    { 
        question: "What is the batch size?", 
        answer: "We maintain small batch sizes with a maximum of 15 students per batch to ensure personalized attention and effective learning." 
    },
    { 
        question: "Can I attend a demo session?", 
        answer: "Sure! We provide a Free Demo Class that gives insights into how we conduct our classes and helps you decide if the course is right for you." 
    },
    { 
        question: "What is the fee structure?", 
        answer: "Course fees vary depending on the program. We offer flexible payment options and early bird discounts. Contact us for detailed fee information." 
    },
    { 
        question: "Do you offer online classes?", 
        answer: "Yes, we offer both online and offline classroom training options to suit your convenience and learning preferences." 
    }
];

// ========== RENDER SERVICES ==========
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;
    
    container.innerHTML = servicesData.map((service, index) => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-up" style="animation-delay: ${index * 0.1}s">
            <div class="overflow-hidden">
                <img src="${service.image}" alt="${service.title}" class="w-full h-48 object-cover transition-transform duration-700 hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">${service.description}</p>
                <ul class="space-y-2">
                    ${service.features.map(f => `<li class="text-gray-500 text-sm hover:text-primary transition hover:translate-x-1 inline-flex items-center gap-2 mr-3"><i class="fas fa-check-circle text-primary text-xs"></i>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// ========== RENDER COURSES ==========
function renderCourses() {
    const container = document.getElementById('coursesGrid');
    if (!container) return;
    
    container.innerHTML = coursesData.map((course, index) => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-up" style="animation-delay: ${index * 0.05}s">
            <div class="relative overflow-hidden">
                <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover transition-transform duration-700 hover:scale-110">
                <span class="absolute top-3 right-3 bg-gradient-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse-slow">${course.badge}</span>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                    <span class="text-white text-xs"><i class="far fa-clock mr-1"></i>${course.duration}</span>
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-bold mb-2 line-clamp-1">${course.title}</h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">${course.description}</p>
                <div class="flex gap-3 text-xs text-gray-500 mb-3">
                    <span><i class="fas fa-users text-primary mr-1"></i>${course.students}</span>
                    <span><i class="fas fa-code text-primary mr-1"></i>${course.projects}</span>
                </div>
                <div class="flex items-center gap-2 mb-4">
                    ${course.price !== "For 2+ Yrs Experience" ? 
                        `<span class="text-2xl font-bold text-primary">₹ ${course.price}/-</span>
                        <span class="text-sm text-gray-400 line-through">₹ ${course.originalPrice}/-</span>
                        <span class="text-xs text-green-500 ml-auto">Save ${Math.round((1 - course.price/course.originalPrice) * 100)}%</span>` :
                        `<span class="text-lg font-bold text-secondary">${course.price}</span>`
                    }
                </div>
                <div class="flex gap-2">
                    <button class="download-btn flex-1 bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primaryDark transition transform hover:scale-105" data-course="${course.title}"><i class="fas fa-download mr-1"></i> Download</button>
                    <button class="whatsapp-btn flex-1 border border-primary text-primary px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition transform hover:scale-105" data-course="${course.title}"><i class="fab fa-whatsapp mr-1"></i> Enquire</button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', () => showNotification('📚 Curriculum will be shared on WhatsApp. Please contact us for details.', 'info'));
    });
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const course = btn.dataset.course;
            window.open(`https://wa.me/918421594102?text=I'm%20interested%20in%20${encodeURIComponent(course)}%20course.%20Please%20share%20the%20complete%20details%20and%20fee%20structure.`, '_blank');
        });
    });
}

// ========== RENDER PLACEMENT ==========
function renderPlacement() {
    const container = document.getElementById('placementGrid');
    if (!container) return;
    
    container.innerHTML = placementData.map((item, index) => `
        <div class="bg-white p-5 rounded-xl text-center shadow-lg card-hover animate-fade-up border border-gray-100" style="animation-delay: ${index * 0.1}s">
            <div class="w-12 h-12 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fas fa-building text-primary text-xl"></i>
            </div>
            <div class="text-primary font-bold text-lg mb-2">${item.company}</div>
            <h4 class="font-semibold">${item.name}</h4>
            <p class="text-gray-500 text-sm">${item.role}</p>
            <span class="inline-block bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mt-3">${item.package}</span>
        </div>
    `).join('');
}

// ========== RENDER TESTIMONIALS ==========
function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;
    
    container.innerHTML = testimonialsData.map((item, index) => `
        <div class="bg-white p-6 rounded-2xl shadow-lg card-hover animate-fade-up border border-gray-100" style="animation-delay: ${index * 0.1}s">
            <div class="flex items-center gap-1 mb-3">
                <i class="fas fa-star text-yellow-400 text-sm"></i>
                <i class="fas fa-star text-yellow-400 text-sm"></i>
                <i class="fas fa-star text-yellow-400 text-sm"></i>
                <i class="fas fa-star text-yellow-400 text-sm"></i>
                <i class="fas fa-star text-yellow-400 text-sm"></i>
            </div>
            <i class="fas fa-quote-left text-3xl text-primary/20 mb-3 block"></i>
            <p class="text-gray-600 italic mb-5 leading-relaxed">"${item.text}"</p>
            <div class="flex items-center gap-3 pt-3 border-t">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-full object-cover transition-transform hover:scale-110 border-2 border-primary/20">
                <div><h4 class="font-bold">${item.name}</h4><p class="text-gray-500 text-xs">${item.role}</p></div>
            </div>
        </div>
    `).join('');
}

// ========== RENDER FAQ ==========
function renderFAQ() {
    const container = document.getElementById('faqGrid');
    if (!container) return;
    
    container.innerHTML = faqData.map((item, index) => `
        <div class="faq-item bg-white rounded-xl shadow-sm hover:shadow-md transition animate-fade-up border border-gray-100" style="animation-delay: ${index * 0.03}s">
            <div class="faq-question flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition">
                <span class="font-semibold text-dark">${item.question}</span>
                <i class="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i>
            </div>
            <div class="faq-answer px-5 pb-5">
                <p class="text-gray-600 text-sm leading-relaxed">${item.answer}</p>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

// ========== FORM HANDLER ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('input, select');
        let valid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                valid = false;
                input.classList.add('border-red-500', 'shake');
                input.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    input.classList.remove('border-red-500', 'shake');
                    input.style.animation = '';
                }, 2000);
            }
        });
        
        if (valid) {
            showNotification('✨ Thank you for your enquiry! Our counselor will contact you within 24 hours.', 'success');
            contactForm.reset();
        } else {
            showNotification('⚠️ Please fill all required fields!', 'error');
        }
    });
}

// ========== NEWSLETTER FORM ==========
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const email = input.value.trim();
        
        if (email && email.includes('@') && email.includes('.')) {
            showNotification('✅ Thank you for subscribing! You will receive updates on new courses and offers.', 'success');
            input.value = '';
        } else {
            showNotification('⚠️ Please enter a valid email address!', 'error');
        }
    });
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-xl text-white shadow-2xl`;
    
    const colors = {
        success: 'bg-gradient-to-r from-green-500 to-emerald-600',
        error: 'bg-gradient-to-r from-red-500 to-rose-600',
        info: 'bg-gradient-to-r from-primary to-purple-600'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    notification.classList.add(colors[type]);
    notification.innerHTML = `<i class="fas ${icons[type]} text-xl"></i><span class="text-sm font-medium">${message}</span>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ========== BACK TO TOP BUTTON ==========
const backBtn = document.createElement('button');
backBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backBtn.className = 'fixed bottom-5 right-5 w-12 h-12 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full shadow-lg cursor-pointer z-40 hidden transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-12';
document.body.appendChild(backBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backBtn.style.display = 'block';
        backBtn.style.animation = 'fadeInUp 0.3s ease';
    } else {
        backBtn.style.display = 'none';
    }
});

backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== SCROLL ANIMATION ==========
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .service-card, .course-card, .placement-card, .testimonial-card').forEach(el => {
    if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    }
});

// ========== ADD SHAKE ANIMATION ==========
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s ease;
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .line-clamp-1 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(shakeStyle);

// ========== COUNTDOWN TIMER FOR NEXT BATCH ==========
function updateCountdown() {
    const targetDate = new Date('April 15, 2024 10:00:00').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
}

setInterval(updateCountdown, 1000);

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderCourses();
    renderPlacement();
    renderTestimonials();
    renderFAQ();
    
    // Set active home link
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add('active', 'text-primary');
    
    // Add animation to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *, .hero-visual');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Initialize counter for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.innerText);
        if (!isNaN(target)) {
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                current += increment;
                if (current >= target) {
                    stat.innerText = target;
                    return;
                }
                stat.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter);
            };
            updateCounter();
        }
    });
});

// ========== PREVENT FORM SUBMIT ON ENTER ==========
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {
            e.preventDefault();
        }
    });
});

// ========== ADD HOVER EFFECT TO CARDS ==========
const cards = document.querySelectorAll('.course-card, .service-card, .why-card, .placement-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ========== LAZY LOAD IMAGES ==========
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    imageObserver.observe(img);
});

// ========== ADD LOADING ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    const loader = document.querySelector('.loader');
    if (loader) loader.remove();
});