const sendEmail = () => {
    const email = encodeURIComponent("sachinkumarf103@gmail.com,sachinmishraf103@gmail.com");
    const subject = encodeURIComponent("Let's Collaborate!");
    const body = encodeURIComponent(
        "Hello Sachin,\n\n" +
        "I came across your portfolio and was impressed with your work. I would love to discuss a potential project where we could collaborate.\n\n" +
        "Please let me know when you’re available to connect and discuss the details further.\n\n" +
        "Looking forward to hearing from you!\n\n" +
        "Best regards,\n[Your Name]\n[Your Contact Information]"
    );
    const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(composeUrl, '_blank');
}

const sendWhatsApp = () => {
    const phoneNumber = '7545823925';
    const message = encodeURIComponent("Hello Sachin,\n\nI came across your portfolio and was impressed with your work. I would love to connect and discuss a potential project where we can collaborate.\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

const sendTelegram = () => {
    const usernameOrPhoneNumber = 'sachinmishrasoni';
    const message = encodeURIComponent("Hello Sachin,\n\nI saw your portfolio and really liked the projects you’ve worked on. I would love to discuss a potential collaboration. Please let me know when you’re available to connect.\n\nBest regards,\n[Your Name]");
    const telegramUrl = `tg://msg?to=${usernameOrPhoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
}

export { sendEmail, sendWhatsApp, sendTelegram };