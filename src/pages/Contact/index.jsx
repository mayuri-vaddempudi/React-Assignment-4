import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Reach out with any questions or feedback.
      </p>

      <div className={styles.contact_content}>
        {/* Contact Form */}
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className={styles.info}>
          <h2>Get in touch</h2>
          <p>Email: support@jewellery.com</p>
          <p>Phone: +46 98765 43210</p>
          <p>Address: 123 Luxury St, Stockholm, Sweden</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
