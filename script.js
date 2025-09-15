// Optimized Portfolio Website JavaScript

// Constants and Configuration
const CONFIG = {
    SPARKLE_CHANCE: 0.3,
    SPARKLE_COLORS: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
    BURST_COUNT: { min: 4, max: 6 },
    SPARKLE_LIFETIME: 1200,
    BURST_LIFETIME: 800,
    STAGGER_DELAY: 30
};

// Utility Functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    },

    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
};

// Theme Management
class ThemeManager {
    constructor() {
        this.logo = document.getElementById('logo');
        this.init();
    }

    init() {
        this.setThemeByTime();
        this.logo?.addEventListener('click', () => this.toggleTheme());
    }

    setThemeByTime() {
        const currentHour = new Date().getHours();
        const isDarkTime = currentHour >= 18 || currentHour < 6;
        document.documentElement.setAttribute('data-theme', isDarkTime ? 'dark' : 'light');
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    }
}

// Canvas System
class CanvasSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.animationId = null;
        this.resizeHandler = utils.debounce(() => this.resize(), 250);
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', this.resizeHandler);
        this.animate();
    }

    resize() {
        const container = this.canvas.parentElement;
        const { clientWidth, clientHeight } = container;
        this.canvas.width = clientWidth;
        this.canvas.height = clientHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        window.removeEventListener('resize', this.resizeHandler);
    }
}

// Optimized Cursor Effects
class CursorEffects {
    constructor() {
        this.cursor = document.querySelector('.cursor-trail');
        this.persistentSparkles = [];
        this.canvasContainer = document.querySelector('.canvas-container');
        this.sparklePool = []; // Object pooling for better performance
        this.ensureCursorElement();
        this.init();
    }

    ensureCursorElement() {
        // Create cursor element if it doesn't exist
        if (!this.cursor) {
            this.cursor = document.createElement('div');
            this.cursor.className = 'cursor-trail';
            document.body.appendChild(this.cursor);
        }
    }

    init() {
        // Ensure we have the cursor element before adding event listeners
        if (!this.cursor) {
            return;
        }

        let sparkleCounter = 0;
        
        // Ultra-smooth cursor with minimal sparkle creation
        document.addEventListener('mousemove', (e) => {
            // Always update cursor immediately
            this.updateCursor(e);
            
            // Create sparkles for a rich trail effect
            sparkleCounter++;
            if (sparkleCounter % 6 === 0) { // Every 5th mouse move for a rich trail
                this.createSparkle(e);
            }
        });

        document.addEventListener('mousedown', (e) => this.createClickBurst(e));
        
        // Add right-click to clear sparkles on canvas
        document.addEventListener('contextmenu', (e) => {
            if (this.isWithinCanvas(e.clientX, e.clientY)) {
                e.preventDefault(); // Prevent context menu
                this.clearPersistentSparkles();
            }
        });
    }

    updateCursor(e) {
        // Ultra-lightweight cursor update
        if (this.cursor) {
            this.cursor.style.left = (e.clientX - 10) + 'px';
            this.cursor.style.top = (e.clientY - 10) + 'px';
        }
    }

    createSparkle(e) {
        // Simplified sparkle creation - already pre-filtered by random chance
        const sparkle = this.getSparkleFromPool();
        this.positionSparkle(sparkle, e.clientX, e.clientY, true);
        
        setTimeout(() => {
            this.returnSparkleToPool(sparkle);
        }, CONFIG.SPARKLE_LIFETIME);
    }

    createClickBurst(e) {
        const burstCount = Math.floor(utils.randomBetween(CONFIG.BURST_COUNT.min, CONFIG.BURST_COUNT.max + 1));
        const isInCanvas = this.isWithinCanvas(e.clientX, e.clientY);
        
        for (let i = 0; i < burstCount; i++) {
            const angle = (i / burstCount) * Math.PI * 2 + Math.random() * 0.5;
            const distance = utils.randomBetween(15, 30);
            const offsetX = Math.cos(angle) * distance;
            const offsetY = Math.sin(angle) * distance;
            
            setTimeout(() => {
                this.createBurstSparkle(e.clientX + offsetX, e.clientY + offsetY, isInCanvas);
            }, i * CONFIG.STAGGER_DELAY);
        }
    }

    createBurstSparkle(x, y, isInCanvas) {
        const sparkle = document.createElement('div');
        sparkle.className = `sparkle burst-sparkle${isInCanvas ? ' persistent-sparkle' : ''}`;
        sparkle.style.setProperty('--sparkle-color', utils.randomChoice(CONFIG.SPARKLE_COLORS));
        this.positionSparkle(sparkle, x, y, false);
        
        if (isInCanvas) {
            this.persistentSparkles.push(sparkle);
            this.animatePersistentSparkle(sparkle);
        } else {
            setTimeout(() => sparkle.remove(), CONFIG.BURST_LIFETIME);
        }
    }

    animatePersistentSparkle(sparkle) {
        sparkle.style.opacity = '0';
        sparkle.style.transform += ' scale(0.3)';
        
        requestAnimationFrame(() => {
            sparkle.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            sparkle.style.opacity = '1';
            sparkle.style.transform = sparkle.style.transform.replace('scale(0.3)', 'scale(1)');
        });
    }

    positionSparkle(sparkle, x, y, addRandomOffset) {
        const offsetX = addRandomOffset ? (Math.random() - 0.5) * 20 : 0;
        const offsetY = addRandomOffset ? (Math.random() - 0.5) * 20 : 0;
        
        // Check if we're in the canvas container and position relative to it
        if (this.isWithinCanvas(x, y)) {
            const canvasRect = this.canvasContainer.getBoundingClientRect();
            const relativeX = x - canvasRect.left + offsetX;
            const relativeY = y - canvasRect.top + offsetY;
            
            sparkle.style.position = 'absolute';
            sparkle.style.left = `${relativeX}px`;
            sparkle.style.top = `${relativeY}px`;
            this.canvasContainer.appendChild(sparkle);
        } else {
            sparkle.style.position = 'fixed';
            sparkle.style.left = `${x + offsetX}px`;
            sparkle.style.top = `${y + offsetY}px`;
            document.body.appendChild(sparkle);
        }
    }

    isWithinCanvas(x, y) {
        if (!this.canvasContainer) return false;
        const rect = this.canvasContainer.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    // Object pooling for sparkles (performance optimization)
    getSparkleFromPool() {
        if (this.sparklePool.length > 0) {
            return this.sparklePool.pop();
        }
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        return sparkle;
    }

    returnSparkleToPool(sparkle) {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
        sparkle.style.cssText = '';
        sparkle.className = 'sparkle';
        this.sparklePool.push(sparkle);
    }

    togglePersistentSparkles(visible) {
        const display = visible ? 'block' : 'none';
        this.persistentSparkles.forEach(sparkle => {
            if (sparkle.parentNode) {
                sparkle.style.display = display;
            }
        });
    }

    clearPersistentSparkles() {
        // Add a subtle fade-out animation before removing
        this.persistentSparkles.forEach((sparkle, index) => {
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    sparkle.style.opacity = '0';
                    sparkle.style.transform += ' scale(0.5)';
                    
                    setTimeout(() => {
                        sparkle.remove();
                    }, 300);
                }
            }, index * 20); // Stagger the fade-out for visual effect
        });
        
        // Clear the array immediately
        this.persistentSparkles.length = 0;
    }
}

// Navigation System
class NavigationSystem {
    constructor(cursorEffects = null) {
        this.currentPage = 'work';
        this.cursorEffects = cursorEffects;
        this.elements = {
            pages: document.querySelectorAll('.page'),
            navLinks: document.querySelectorAll('.nav-link'),
            mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
            hamburgerMenu: document.getElementById('hamburger-menu'),
            mobileMenu: document.getElementById('mobile-menu')
        };
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleInitialLoad();
    }

    bindEvents() {
        // Desktop navigation
        this.elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTo(link.getAttribute('data-page'));
            });
        });

        // Mobile navigation
        this.elements.mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTo(link.getAttribute('data-page'));
                this.closeMobileMenu();
            });
        });

        // Hamburger menu
        this.elements.hamburgerMenu?.addEventListener('click', () => this.toggleMobileMenu());

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (!this.elements.hamburgerMenu?.contains(e.target) && 
                !this.elements.mobileMenu?.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Browser navigation
        window.addEventListener('popstate', (e) => {
            this.navigateTo(e.state?.page || 'work', false);
        });
        
        // Initialize with work page as default
        this.navigateTo('work', false);
    }

    navigateTo(page, pushState = true) {
        if (page === this.currentPage) return;

        this.updatePageVisibility(page);
        this.updateNavigation(page);
        this.managePersistentSparkles(page);
        this.manageBodyScroll(page);
        
        // Delay scroll to top to avoid layout shift
        setTimeout(() => {
            this.scrollToTop();
        }, 0);
        
        this.currentPage = page;

        if (pushState) {
            history.pushState({ page }, '', page === 'home' ? '/' : `#${page}`);
        }

        // Notify other systems about page changes
        this.notifyPageChange(page);
    }

    notifyPageChange(page) {
        // Custom event to notify other systems about page navigation
        const event = new CustomEvent('pageNavigated', { detail: { page } });
        document.dispatchEvent(event);
    }

    updatePageVisibility(page) {
        this.elements.pages.forEach(p => p.classList.remove('active'));
        const targetPage = document.getElementById(page);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.scrollTop = 0;
            
            // Special handling for project detail page
            if (page === 'project-detail') {
                const projectDetailContainer = document.querySelector('.project-detail-container');
                if (projectDetailContainer) {
                    projectDetailContainer.scrollTop = 0;
                }
            }
            
            console.log('Page activated:', page, targetPage); // Debug log
        } else {
            console.log('Page not found:', page); // Debug log
        }
    }

    updateNavigation(page) {
        [...this.elements.navLinks, ...this.elements.mobileNavLinks].forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-page') === page);
        });
    }

    managePersistentSparkles(page) {
        this.cursorEffects?.togglePersistentSparkles(page === 'home');
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    manageBodyScroll(page) {
        // Prevent body scrolling when project detail is active
        if (page === 'project-detail') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    toggleMobileMenu() {
        this.elements.hamburgerMenu?.classList.toggle('active');
        this.elements.mobileMenu?.classList.toggle('active');
    }

    closeMobileMenu() {
        this.elements.hamburgerMenu?.classList.remove('active');
        this.elements.mobileMenu?.classList.remove('active');
    }

    handleInitialLoad() {
        window.addEventListener('load', () => this.scrollToTop());
    }
}


// Project Detail System
class ProjectDetailSystem {
    constructor(navigationSystem) {
        this.navigationSystem = navigationSystem;
        this.elements = {
            projectItems: document.querySelectorAll('.project-item'),
            clickableThumbnails: document.querySelectorAll('.clickable-thumbnail'),
            clickableInfos: document.querySelectorAll('.clickable-info'),
            backButton: document.getElementById('back-button'),
            detailTitle: document.getElementById('project-detail-title'),
            detailSubtitle: document.getElementById('project-detail-subtitle'),
            description: document.getElementById('project-description'),
            heroImg: document.getElementById('project-hero-img'),
            extendedDescription: document.getElementById('project-extended-description'),
            galleryImg1: document.getElementById('project-gallery-img1'),
            galleryImg2: document.getElementById('project-gallery-img2'),
            creditsContent: document.getElementById('project-credits-content')
        };
        
        // Bind the click handler once with proper context
        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.eventsBound = false;
        this.init();
    }

    init() {
        this.bindProjectCardEvents();
        this.bindBackButton();
        this.listenForPageChanges();
    }

    listenForPageChanges() {
        // No need to re-bind events since we use event delegation
        // Events will persist across navigation
    }

    bindProjectCardEvents() {
        // Use event delegation to ensure clicks work after navigation
        const workGrid = document.querySelector('.work-grid');
        console.log('Work grid found:', workGrid); // Debug log
        console.log('Events already bound:', this.eventsBound); // Debug log
        
        if (workGrid && !this.eventsBound) {
            // Add both click and touchstart events for better mobile support
            workGrid.addEventListener('click', this.handleProjectClick);
            workGrid.addEventListener('touchstart', this.handleProjectClick);
            this.eventsBound = true;
            console.log('Event listeners added to work grid'); // Debug log
        }
    }

    handleProjectClick(e) {
        console.log('Click event triggered:', e.type, e.target); // Debug log
        
        // Check if clicked element or its parent is clickable
        const clickableElement = e.target.closest('.clickable-thumbnail, .clickable-info');
        console.log('Clickable element found:', clickableElement); // Debug log
        
        if (clickableElement) {
            e.preventDefault();
            const projectItem = clickableElement.closest('.project-item');
            const projectId = projectItem?.dataset.project;
            
            console.log('Project clicked:', projectId); // Debug log
            
            if (projectId) {
                this.showProjectDetail(projectId);
            }
        } else {
            console.log('No clickable element found for:', e.target); // Debug log
        }
    }

    bindBackButton() {
        console.log('Back button element:', this.elements.backButton); // Debug log
        
        this.elements.backButton?.addEventListener('click', () => {
            this.navigationSystem.navigateTo('work');
        });
        
        // Add touch support for mobile
        this.elements.backButton?.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.navigationSystem.navigateTo('work');
        });
    }

    showProjectDetail(projectId) {
        // Use the helper function to get project data
        const project = ProjectDataHelpers.getProject(projectId);
        if (!project) {
            // Create fallback data for projects without defined data
            const fallbackProject = this.createFallbackProject(projectId);
            this.populateProjectDetail(fallbackProject);
        } else {
            this.populateProjectDetail(project);
        }

        // Navigate to project detail page
        console.log('Navigating to project detail page'); // Debug log
        this.navigationSystem.navigateTo('project-detail');
        
        // Reset scroll position for project detail page
        this.resetProjectDetailScroll();
    }

    resetProjectDetailScroll() {
        // Reset scroll position for project detail page and its container
        // Use a small delay to ensure the page transition is complete
        setTimeout(() => {
            const projectDetailPage = document.getElementById('project-detail');
            const projectDetailContainer = document.querySelector('.project-detail-container');
            
            if (projectDetailPage) {
                projectDetailPage.scrollTop = 0;
            }
            
            if (projectDetailContainer) {
                projectDetailContainer.scrollTop = 0;
            }
            
            // Also reset window scroll position
            window.scrollTo(0, 0);
        }, 100);
    }

    createFallbackProject(projectId) {
        // Get the project element from DOM to extract basic info
        const projectElement = document.querySelector(`[data-project="${projectId}"]`);
        const title = projectElement?.querySelector('.project-title')?.textContent || 'Project Title';
        const subtitle = projectElement?.querySelector('.project-subtitle')?.textContent || 'Technology Stack';
        
        return {
            title: title,
            subtitle: subtitle,
            description: 'This project is currently being documented. More details will be available soon.',
            heroImage: null,
            extendedDescription: 'This project showcases innovative technical solutions and creative problem-solving. Full project details and documentation are being prepared for publication.',
            gallery: [null, null],
            credits: `Project: ${title}<br>Development: Haolin Fang<br>Status: Documentation in progress`
        };
    }

    createHeroPlaceholder(container, project) {
        container.innerHTML = `
            <div class="hero-placeholder">
                <span>${project.title}</span>
                <p>Visual Content</p>
            </div>
        `;
    }

    getProjectIdFromTitle(title) {
        // Convert project title to project ID format
        if (title.includes('Fendi')) return 'meta-fendi';
        if (title.includes('Dior')) return 'meta-dior';
        if (title.includes('UPS')) return 'ups-aapi';
        if (title.includes('BUCK LNY') && title.includes('LNY')) return 'buck-lny';
        if (title.includes('Dream Stream')) return 'dream-stream';
        if (title.includes('Renderball') && title.includes('Sphere')) return 'renderball';
        if (title.includes('Tiffany')) return 'meta-tiffany';
        if (title.includes('Roblox')) return 'roblox-phaserider';
        if (title.includes('BUCK Altspace') && title.includes('Holiday')) return 'buck-altspace';
        if (title.includes('Tokyo')) return 'tokyo-olympics';
        if (title.includes('FitXR') && title.includes('Fitness')) return 'meta-fitXR';
        if (title.includes('Spark AR') && title.includes('Spark AR')) return 'spark-ar';
        if (title.includes('Takeoff') && title.includes('PC')) return 'yugalabs-takeoff';
        if (title.includes('Flat Journal')) return 'flat-journal';
        if (title.includes('Snapchat AR')) return 'snapchat-tracer';
        
        // Fallback: convert title to kebab-case
        return title.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
    }

    populateProjectDetail(project) {
        // Query elements fresh each time to avoid stale references
        const elements = {
            detailTitle: document.getElementById('project-detail-title'),
            detailSubtitle: document.getElementById('project-detail-subtitle'),
            description: document.getElementById('project-description'),
            heroImg: document.getElementById('project-hero-img'),
            heroContainer: document.querySelector('.project-hero-image'),
            extendedDescription: document.getElementById('project-extended-description'),
            galleryImg1: document.getElementById('project-gallery-img1'),
            galleryImg2: document.getElementById('project-gallery-img2'),
            galleryContainer1: document.querySelector('.project-gallery .gallery-image:first-child'),
            galleryContainer2: document.querySelector('.project-gallery .gallery-image:last-child'),
            creditsContent: document.getElementById('project-credits-content'),
            projectContainer: document.querySelector('.project-detail-container')
        };

        // Set project identifier for CSS targeting
        if (elements.projectContainer) {
            // Extract project ID from title or use a fallback
            const projectId = this.getProjectIdFromTitle(project.title);
            elements.projectContainer.setAttribute('data-project', projectId);
        }

        // Update title and subtitle
        if (elements.detailTitle) {
            elements.detailTitle.textContent = project.title;
        }
        if (elements.detailSubtitle) {
            elements.detailSubtitle.textContent = project.subtitle;
        }
        
        // Update description with HTML support
        if (elements.description) {
            elements.description.innerHTML = this.formatDescription(project.description);
        }
        
        // Update hero image with support for array format
        if (elements.heroContainer) {
            if (project.heroImage) {
                if (Array.isArray(project.heroImage) && project.heroImage.length > 0) {
                    // Handle array of hero images
                    const heroImagesHTML = project.heroImage.map((heroItem, index) => {
                        if (heroItem && heroItem.src) {
                            return `<img id="project-hero-img-${index}" alt="${heroItem.caption || project.title}" class="hero-image" src="${heroItem.src}">`;
                        }
                        return '';
                    }).filter(html => html).join('');
                    
                    if (heroImagesHTML) {
                        elements.heroContainer.innerHTML = heroImagesHTML;
                    } else {
                        this.createHeroPlaceholder(elements.heroContainer, project);
                    }
                } else if (typeof project.heroImage === 'string') {
                    // Handle legacy string format
                    elements.heroContainer.innerHTML = `<img id="project-hero-img" alt="${project.title}" class="hero-image" src="${project.heroImage}">`;
                } else if (typeof project.heroImage === 'object' && project.heroImage.src) {
                    // Handle single object format
                    elements.heroContainer.innerHTML = `<img id="project-hero-img" alt="${project.heroImage.caption || project.title}" class="hero-image" src="${project.heroImage.src}">`;
                } else {
                    this.createHeroPlaceholder(elements.heroContainer, project);
                }
            } else {
                this.createHeroPlaceholder(elements.heroContainer, project);
            }
        }
        
        // Handle new section-based structure vs old structure
        if (project.sections && project.sections.length > 0) {
            this.renderSections(project.sections, elements.extendedDescription);
        } else if (project.extendedDescription) {
            // Fallback to old structure
            if (elements.extendedDescription) {
                elements.extendedDescription.innerHTML = this.formatDescription(project.extendedDescription);
            }
        }
        
        // Update gallery images with placeholder support (legacy support)
        if (project.gallery && project.gallery.length >= 2) {
            // Handle first gallery image
            if (elements.galleryContainer1) {
                if (project.gallery[0]) {
                    elements.galleryContainer1.innerHTML = `<img id="project-gallery-img1" alt="${project.title} - Image 1" class="gallery-image-item" src="${project.gallery[0]}">`;
                } else {
                    elements.galleryContainer1.innerHTML = `
                        <div class="gallery-placeholder">
                            <span>Gallery Image 1</span>
                        </div>
                    `;
                }
            }
            
            // Handle second gallery image
            if (elements.galleryContainer2) {
                if (project.gallery[1]) {
                    elements.galleryContainer2.innerHTML = `<img id="project-gallery-img2" alt="${project.title} - Image 2" class="gallery-image-item" src="${project.gallery[1]}">`;
                } else {
                    elements.galleryContainer2.innerHTML = `
                        <div class="gallery-placeholder">
                            <span>Gallery Image 2</span>
                        </div>
                    `;
                }
            }
        }
        
        // Update credits
        if (elements.creditsContent) {
            elements.creditsContent.innerHTML = project.credits;
        }
    }

    renderSections(sections, container) {
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        sections.forEach((section, index) => {
            const sectionElement = this.createSectionElement(section, index);
            container.appendChild(sectionElement);
        });
    }

    createSectionElement(section, index) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'project-section';
        sectionDiv.setAttribute('data-section-id', section.id);
        
        // Create section header
        const header = document.createElement('h2');
        header.className = 'section-title';
        header.textContent = section.title;
        sectionDiv.appendChild(header);
        
        // Create section content
        const content = document.createElement('div');
        content.className = 'section-content';
        content.innerHTML = this.formatDescription(section.content);
        sectionDiv.appendChild(content);
        
        // Add media if present
        if (section.media && section.media.length > 0) {
            if (section.slideshow) {
                // Create slideshow
                const slideshowElement = this.createSlideshow(section.media);
                sectionDiv.appendChild(slideshowElement);
            } else {
                // Create regular media grid
                const mediaContainer = document.createElement('div');
                mediaContainer.className = 'section-media';
                
                // Check if section has videos and add appropriate class
                const hasVideos = section.media.some(media => media.type === 'mp4');
                const videoCount = section.media.filter(media => media.type === 'mp4').length;
                
                if (hasVideos) {
                    mediaContainer.classList.add('has-videos');
                    if (videoCount === 1) {
                        mediaContainer.classList.add('single-video');
                    } else if (videoCount >= 2) {
                        mediaContainer.classList.add('multiple-videos');
                    }
                }
                
                // Check if section has images and add appropriate class
                const hasImages = section.media.some(media => media.type === 'image');
                const imageCount = section.media.filter(media => media.type === 'image').length;
                
                if (hasImages) {
                    mediaContainer.classList.add('has-images');
                    if (imageCount === 1) {
                        mediaContainer.classList.add('single-image');
                    } else if (imageCount >= 2) {
                        mediaContainer.classList.add('multiple-images');
                    }
                }
                
                // Check if section has GIFs and add appropriate class
                const hasGifs = section.media.some(media => media.type === 'gif');
                const gifCount = section.media.filter(media => media.type === 'gif').length;
                
                if (hasGifs) {
                    mediaContainer.classList.add('has-gifs');
                    if (gifCount === 1) {
                        mediaContainer.classList.add('single-gif');
                    } else if (gifCount >= 2) {
                        mediaContainer.classList.add('multiple-gifs');
                    }
                }
                
                section.media.forEach(mediaItem => {
                    const mediaElement = this.createMediaElement(mediaItem);
                    mediaContainer.appendChild(mediaElement);
                });
                
                sectionDiv.appendChild(mediaContainer);
            }
        }
        
        return sectionDiv;
    }

    createMediaElement(mediaItem) {
        const mediaDiv = document.createElement('div');
        mediaDiv.className = `media-item media-${mediaItem.type}`;
        
        let mediaElement;
        
        switch (mediaItem.type) {
            case 'image':
                mediaElement = document.createElement('img');
                mediaElement.src = mediaItem.src;
                mediaElement.alt = mediaItem.caption || 'Project media';
                mediaElement.className = 'media-image';
                break;
                
            case 'gif':
                mediaElement = document.createElement('img');
                mediaElement.src = mediaItem.src;
                mediaElement.alt = mediaItem.caption || 'Project animation';
                mediaElement.className = 'media-gif';
                break;
                
            case 'video':
                mediaElement = document.createElement('video');
                mediaElement.src = mediaItem.src;
                mediaElement.controls = true;
                mediaElement.className = 'media-video';
                break;
                
            case 'mp4':
                mediaElement = document.createElement('video');
                mediaElement.src = mediaItem.src;
                mediaElement.autoplay = true;
                mediaElement.loop = true;
                mediaElement.muted = true; // Required for autoplay in most browsers
                mediaElement.playsInline = true; // For mobile devices
                mediaElement.controls = false; // No controls at all
                mediaElement.className = 'media-mp4';
                break;
                
            default:
                // Fallback for unknown media types
                mediaElement = document.createElement('div');
                mediaElement.className = 'media-placeholder';
                mediaElement.textContent = 'Media content';
                break;
        }
        
        mediaDiv.appendChild(mediaElement);
        
        // Add caption if present
        if (mediaItem.caption) {
            const caption = document.createElement('p');
            caption.className = 'media-caption';
            caption.textContent = mediaItem.caption;
            mediaDiv.appendChild(caption);
        }
        
        return mediaDiv;
    }

    createSlideshow(mediaItems) {
        const slideshowContainer = document.createElement('div');
        slideshowContainer.className = 'slideshow-container';
        
        // Create slideshow wrapper
        const slideshowWrapper = document.createElement('div');
        slideshowWrapper.className = 'slideshow-wrapper';
        
        // Create slides container
        const slidesContainer = document.createElement('div');
        slidesContainer.className = 'slides-container';
        
        // Create slides
        mediaItems.forEach((mediaItem, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            slide.setAttribute('data-slide', index);
            
            const mediaElement = this.createMediaElement(mediaItem);
            slide.appendChild(mediaElement);
            slidesContainer.appendChild(slide);
        });
        
        slideshowWrapper.appendChild(slidesContainer);
        
        // Create navigation controls
        const controls = document.createElement('div');
        controls.className = 'slideshow-controls';
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slideshow-btn prev-btn';
        prevBtn.innerHTML = '‹';
        prevBtn.setAttribute('aria-label', 'Previous image');
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slideshow-btn next-btn';
        nextBtn.innerHTML = '›';
        nextBtn.setAttribute('aria-label', 'Next image');
        
        // Dots indicator
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slideshow-dots';
        
        mediaItems.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('data-slide', index);
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dotsContainer.appendChild(dot);
        });
        
        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);
        controls.appendChild(dotsContainer);
        
        slideshowContainer.appendChild(slideshowWrapper);
        slideshowContainer.appendChild(controls);
        
        // Add event listeners
        this.addSlideshowEventListeners(slideshowContainer, mediaItems.length);
        
        return slideshowContainer;
    }

    addSlideshowEventListeners(slideshowContainer, totalSlides) {
        const slides = slideshowContainer.querySelectorAll('.slide');
        const dots = slideshowContainer.querySelectorAll('.dot');
        const prevBtn = slideshowContainer.querySelector('.prev-btn');
        const nextBtn = slideshowContainer.querySelector('.next-btn');
        
        let currentSlide = 0;
        
        const showSlide = (index) => {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSlide = index;
        };
        
        const nextSlide = () => {
            const nextIndex = (currentSlide + 1) % totalSlides;
            showSlide(nextIndex);
        };
        
        const prevSlide = () => {
            const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
        };
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Keyboard navigation
        slideshowContainer.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Make slideshow focusable for keyboard navigation
        slideshowContainer.setAttribute('tabindex', '0');
    }

    formatDescription(text) {
        if (!text) return '';
        
        // If text contains HTML tags, return as-is
        if (text.includes('<') && text.includes('>')) {
            return text;
        }
        
        // Otherwise, convert line breaks to <br> tags for basic formatting
        return text.replace(/\n\s*\n/g, '</p><p>').replace(/\n/g, '<br>');
    }
}

// Interactive Animations
class InteractiveAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupHoverEffects();
        this.setupClickEffects();
    }

    setupHoverEffects() {
        // Project thumbnails
        document.querySelectorAll('.clickable-thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('mouseenter', () => {
                thumbnail.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            thumbnail.addEventListener('mouseleave', () => {
                thumbnail.style.transform = '';
            });
        });
    }

    setupClickEffects() {
        const interactiveElements = document.querySelectorAll('.logo, .nav-link, .clickable-thumbnail, .clickable-info');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mousedown', () => {
                element.style.transform = 'scale(0.95)';
            });
            
            ['mouseup', 'mouseleave'].forEach(event => {
                element.addEventListener(event, () => {
                    element.style.transform = '';
                });
            });
        });
    }
}

// Application Initialization
class App {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        // Ensure page starts at top
        window.scrollTo(0, 0);
        
        // Initialize all components
        this.components = {
            themeManager: new ThemeManager(),
            cursorEffects: new CursorEffects(),
            navigationSystem: null,
            projectDetailSystem: null,
            interactiveAnimations: new InteractiveAnimations(),
            canvasSystem: null
        };

        // Initialize navigation with cursor effects reference
        this.components.navigationSystem = new NavigationSystem(this.components.cursorEffects);
        
        // Initialize project detail system with navigation reference
        this.components.projectDetailSystem = new ProjectDetailSystem(this.components.navigationSystem);

        // Initialize canvas if present
        const canvas = document.getElementById('particleCanvas');
        if (canvas) {
            this.components.canvasSystem = new CanvasSystem(canvas);
        }

        this.setupPerformanceOptimizations();
    }

    setupPerformanceOptimizations() {
        // Pause animations when tab is not visible
        document.addEventListener('visibilitychange', () => {
            const playState = document.hidden ? 'paused' : 'running';
            document.body.style.animationPlayState = playState;
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
}

// Initialize application when DOM is ready
function initializeApp() {
    new App();
}

// Check if DOM is already loaded or wait for it
if (document.readyState === 'loading') {
    // DOM is still loading, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded, initialize immediately
    initializeApp();
} 