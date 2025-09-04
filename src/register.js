import { useState } from "react";
import "./register.css";


const sendRegistration = async (data) => {
  try {
    const response = await fetch("https://backend-esc.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to register user",
        status: response.status,
      };
    }

    console.log("✅ User registered successfully");
    return {
      success: true,
      data: result,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("❌ Network error:", error);
    return {
      success: false,
      error: "Network error. Please check your connection.",
      networkError: true,
    };
  }
};

export default function Register() {
  // state for all inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const result = await sendRegistration({
      firstName,
      lastName,
      email,
      phone,
      department,
      message,
    });

    if (result.success) {
      alert("✅ Registration successful!");
      // clear form after success
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDepartment("");
      setMessage("");
    } else {
      alert("❌ " + result.error);
    }
  };

  return (
    <div className="register">
      <h2 className="lider">JOIN ESC</h2>
      <p className="amine">Where Curiosity Meets Community</p>

      <div className="f_input">
        <input
          required
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="f_input">
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <select
        required
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="" disabled hidden>
          Select your choice
        </option>
        <option value="dev">Dev</option>
        <option value="design">Design</option>
        <option value="hr">Human Resources</option>
        <option value="production">Production</option>
      </select>

      <textarea
        required
        placeholder="Say something"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button className="join" onClick={handleSubmit}>
        <p>REGISTER</p>
      </button>
    </div>
  );
}