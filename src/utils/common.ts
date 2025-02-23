export const hireMe = () => {
    const email = encodeURIComponent("sachinkumarf103@gmail.com,sachinmishraf103@gmail.com");
    const subject = encodeURIComponent("Let's Collaborate!");
    const body = encodeURIComponent("Hi there,\n\nI'm really interested in collaborating with you. Let's discuss how I can contribute to your project!\n\nBest regards,\n[Your Name]");;
    const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(composeUrl, '_blank');
}