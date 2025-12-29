export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "80px 20px", background: "#e0e7ff" }}>
        <h1 style={{ fontSize: "42px", color: "#111827" }}>Welcome to MindConnect</h1>
        <p style={{ fontSize: "18px", color: "#4b5563" }}>
          A safe space for mental health support and community sharing.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ maxWidth: "900px", margin: "40px auto", display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <h3>Community Support</h3>
          <p>Connect and share experiences anonymously with peers.</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Resources</h3>
          <p>Access mental health resources curated for you.</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Secure & Private</h3>
          <p>Your data and identity are fully protected.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ textAlign: "center", padding: "40px 20px", background: "#4f46e5" }}>
        <h2 style={{ color: "white" }}>Join the Community Today</h2>
        <button style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "none",
          background: "white",
          color: "#4f46e5",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </section>
    </div>
  );
}
