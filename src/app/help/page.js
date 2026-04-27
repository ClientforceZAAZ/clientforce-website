export default function Help() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle} className="font-degular text-3xl">Contact Support</h1>
        <p style={subtextStyle}>
          Need help? Our team typically responds within 24 hours.
        </p>

        <form action="https://formspree.io/f/xeevwpaa" method="POST" style={formStyle}>
          <div style={formGroup}>
            <label style={labelStyle}>Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="John Doe"
              required 
              style={inputStyle} 
            />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="john@example.com"
              required 
              style={inputStyle} 
            />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Reason for Inquiry</label>
            <select name="queryType" style={inputStyle}>
              <option value="Question">General Question</option>
              <option value="Billing">Billing Issue</option>
              <option value="Feedback">Product Feedback</option>
              <option value="Technical">Technical Support / Bug</option>
            </select>
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Message</label>
            <textarea 
              name="message" 
              rows="5" 
              placeholder="How can we help you today?"
              required 
              style={{ ...inputStyle, resize: 'none' }}
            ></textarea>
          </div>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Styles ---

const containerStyle = {
  minHeight: '100vh',
  padding: '20px',
  backgroundColor: '#f8fafc', // Light slate background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start', // Allows it to sit below the navbar
};

const cardStyle = {
  marginTop: '80px', // Spacing for Navbar
  width: '100%',
  maxWidth: '480px',
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  border: '1px solid #e2e8f0',
};

const headingStyle = {
  fontWeight: '700',
  color: '#1e293b',
  marginBottom: '8px',
  textAlign: 'center',
};

const subtextStyle = {
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '32px',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const formGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#475569',
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  fontSize: '15px',
  color: '#1e293b',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '12px',
  backgroundColor: '#35E834', 
  color: '#000000',
  fontSize: '16px',
  fontWeight: '600',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};