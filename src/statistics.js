import { useState, useEffect } from "react";
import "./statistics.css";

export default function Statistics() {
  const [stats] = useState({
    users: 220,
    events: 180,
    other: 350
  });
  
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    events: 0,
    other: 0
  });

  // Counter animation on component mount
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const frameRate = 60; // 60 FPS
      const totalFrames = (duration / 1000) * frameRate;
      let currentFrame = 0;
      
      const animate = () => {
        if (currentFrame <= totalFrames) {
          const progress = currentFrame / totalFrames;
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          
          setAnimatedStats({
            users: Math.round(stats.users * easeOutQuart),
            events: Math.round(stats.events * easeOutQuart),
            other: Math.round(stats.other * easeOutQuart)
          });
          
          currentFrame++;
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Start animation after a small delay
    const timer = setTimeout(animateCounters, 300);
    return () => clearTimeout(timer);
  }, []);

  
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="statistics">
      <h2 className="lider">Statistics</h2>
      <div className="stats-cards">
        <div className="stat-card">
          <h3>{formatNumber(animatedStats.users)}+</h3>
          <p>Departments</p>
        </div>
        <div className="stat-card">
          <h3>{formatNumber(animatedStats.events)}+</h3>
          <p>Events</p>
        </div>
        <div className="stat-card">
          <h3>{formatNumber(animatedStats.other)}+</h3>
          <p>Members</p>
        </div>
      </div>
    </div>
  );
}