import { useState } from "react";
import "./register.css";

const sendRegistration = async (data) => {
  try {
    console.log("🚀 Sending registration data:", data);
    
    const response = await fetch("https://backend-esc.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });

    console.log("📡 Response status:", response.status);

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("❌ Non-JSON response:", text);
      throw new Error("Server returned non-JSON response");
    }

    const result = await response.json();
    console.log("📦 Response data:", result);

    if (!response.ok) {
      return {
        success: false,
        error: result.error || result.message || "Failed to register user",
        status: response.status,
      };
    }

    console.log("✅ User registered successfully:", result);
    return {
      success: true,
      data: result,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("❌ Network error:", error);
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        success: false,
        error: "Unable to connect to server. Please check if the server is running.",
        networkError: true,
      };
    }
    
    return {
      success: false,
      error: error.message || "Network error. Please check your connection.",
      networkError: true,
    };
  }
};

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const result = await sendRegistration({
        FirstName: firstName,
        LastName: lastName,
        email: email,
        phoneNumber: phone,
        Department: department,
        motivation: message,
      });

      if (result.success) {
        setShowSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDepartment("");
        setMessage("");
      } else {
        alert("❌ " + result.error);
        console.error("Registration failed:", result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register">
      <h2 className='lider'>JOIN ESC</h2>
      <p className='amine'>Where Curiosity Meets Community</p>
      
      {showSuccess ? (
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
          <h3 className="success-title">Registration Successful!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='f_input'>
            <input 
              required 
              type='text' 
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isSubmitting}
            />
            <input 
              required 
              type='text' 
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          
          <div className='f_input'>
            <input 
              required 
              type='email' 
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <input 
              required 
              type='tel' 
              placeholder="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          
          <select 
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            disabled={isSubmitting}
          >
            <option value="" disabled hidden>Select your choice</option>
            <option value="dev">Dev</option>
            <option value="design">Design</option>
            <option value="hr">human resources</option>
            <option value="events">Events</option>
          </select>
          
          <textarea 
            required 
            placeholder="say something"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
          />
          
          <button 
            className='join1' 
            type="submit"
            disabled={isSubmitting}
          >
            <p>{isSubmitting ? "REGISTERING..." : "REGISTER"}</p>
          </button>
        </form>
      )}
    </div>
  );
}
