const React = require('react');

const LoginPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>LOGO</div>
        <h1 style={styles.title}>Triton Spend</h1>
      </div>
      <div style={styles.loginBox}>
      
        <label style={styles.label}>
          Username: <input type="text" style={styles.input} />
        </label>
        <label style={styles.label}>
          Password: <input type="password" style={styles.input} />
        </label>
        <div style={styles.linkContainer}>
          <a href="#" style={styles.link}>Create new account</a>
          <span style={styles.divider}>|</span>
          <a href="#" style={styles.link}>Forgot password</a>
        </div>
        <div style={styles.ssoBox}>Sign in with SSO</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    position: "relative" as const,
  },
  header: {
    position: "absolute" as const,
    top: "20px",
    left: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    backgroundColor: "#a6dcef",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    color: "#ffffff",
  },
  title: {
    fontSize: "45px",
    fontWeight: "bold" as const,
    color: "#000000",
  },
  loginBox: {
    backgroundColor: "#90c8c3",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    justifycontent: "center" as const,
    width: "300px",
    height: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  ssoBox: {
    width: "100%",
    textAlign: "center" as const,
    padding: "10px 0",
    marginTop: "30px",
    marginBottom: "10px",
    border: "1px solid #000",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#000000",
    cursor: "pointer",
  },
  label: {
    display: "flex",
    flexDirection: "row" as const,
    marginBottom: "45px",
    fontSize: "20px",
    color: "#000000",
    width: "100%",
  },
  input: {
    backgroundColor: "#D3D3D3",
    padding: "5px",
    border: "1px solid #ccc",
    marginLeft: "10px",
    fontSize: "16px",
    width: "100%",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center" as const,
    width: "100%",
    marginTop: "50px",
  },
  link: {
    fontSize: "16px",
    color: "#000000",
    textDecoration: "none",
  },
  divider: {
    margin: "0 10px",
    fontSize: "14px",
    color: "#000000",
  },
};

export default LoginPage;
