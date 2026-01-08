

document.querySelectorAll('nav a, .logo a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openAndDownloadResume() {
    // Open resume in new tab
    window.open('Muskan_resume.pdf', '_blank');

    // Force download
    const link = document.createElement('a');
    link.href = 'Muskan_resume.pdf';
    link.download = 'Muskan_Mohan_Kale_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
