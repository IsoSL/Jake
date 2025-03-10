document.addEventListener('DOMContentLoaded', function() {
    // Add interactive effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            statCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Flash effect on click
            this.style.backgroundColor = 'rgba(0, 102, 255, 0.3)';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 300);
        });
    });

    // Random blue pulse effect on profile pic
    const profilePic = document.querySelector('.profile-pic');
    
    function randomPulse() {
        const duration = Math.random() * 2000 + 1000; // Random duration between 1-3 seconds
        
        // Add pulse effect
        profilePic.style.boxShadow = '0 0 80px rgba(0, 102, 255, 0.8), 0 0 30px rgba(0, 194, 255, 0.6)';
        
        // Reset after duration
        setTimeout(() => {
            profilePic.style.boxShadow = '';
            
            // Schedule next pulse after random delay
            setTimeout(randomPulse, Math.random() * 5000 + 2000);
        }, duration);
    }
    
    // Start random pulse effect with initial delay
    setTimeout(randomPulse, 2000);

    // Add hover effect on schedule items
    const scheduleElement = document.getElementById('schedule');
    const scheduleItems = scheduleElement.innerHTML.split('<br>');
    
    // Rebuild schedule with spans for each item
    let newScheduleHTML = '';
    scheduleItems.forEach(item => {
        newScheduleHTML += `<span class="schedule-item">${item}</span><br>`;
    });
    
    scheduleElement.innerHTML = newScheduleHTML;
    
    // Add hover effects to schedule items
    const scheduleItemElements = document.querySelectorAll('.schedule-item');
    
    scheduleItemElements.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('highlight');
        });
        
        item.addEventListener('mouseout', function() {
            this.classList.remove('highlight');
        });
    });

    // Create parallax effect on background elements
    document.addEventListener('mousemove', function(e) {
        const bgElement1 = document.querySelector('.bg-element-1');
        const bgElement2 = document.querySelector('.bg-element-2');
        
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        bgElement1.style.transform = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
        bgElement2.style.transform = `translate(${-mouseX * 40}px, ${-mouseY * 40}px)`;
    });

    // Add glitch animation trigger
    const glitchText = document.querySelector('.glitch-text');
    
    glitchText.addEventListener('click', function() {
        this.style.animation = 'none';
        void this.offsetWidth; // Trigger reflow
        this.style.animation = 'glitch 0.3s linear 3';
        
        setTimeout(() => {
            this.style.animation = '';
        }, 1000);
    });
});
