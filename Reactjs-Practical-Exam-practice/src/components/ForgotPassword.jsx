import React, { useState } from "react";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Steps: 1 = Enter Email, 2 = Verify Email, 3 = Reset Password
  const [email, setEmail] = useState("");
  const [enteredEmail, setEnteredEmail] = useState(""); // Simulated email storage
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailSubmit = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    // Simulate sending an email
    alert(`Verification email sent to ${email}.`);
    setEnteredEmail(email); // Simulate storing the user's email
    setStep(2); // Move to verify step
    setError("");
  };

  const handleVerification = () => {
    if (email !== enteredEmail) {
      setError("Email verification failed. Please try again.");
      return;
    }

    setStep(3); // Move to reset password step
    setError("");
  };

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    alert("Password successfully reset!");
    setStep(1); // Reset the flow
    setEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Forgot Password</h2>
      {step === 1 && (
        <>
          <label>Enter your email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ display: "block", margin: "10px auto", width: "100%" }}
          />
          <button onClick={handleEmailSubmit} style={{ marginTop: "10px" }}>
            Submit
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <label>Verify your email:</label>
          <p>We sent a verification email to: {enteredEmail}</p>
          <button onClick={handleVerification} style={{ marginTop: "10px" }}>
            Verify
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <label>Reset your password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            style={{ display: "block", margin: "10px auto", width: "100%" }}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            style={{ display: "block", margin: "10px auto", width: "100%" }}
          />
          <button onClick={handleResetPassword} style={{ marginTop: "10px" }}>
            Reset Password
          </button>
        </>
      )}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
