export default function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>
        Have feedback, suggestions, or need support? Reach out to us.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
