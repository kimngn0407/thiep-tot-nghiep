
"use client";

import { useState } from "react";
import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function GraduationPage() {
  const [showWish, setShowWish] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [guestName, setGuestName] = useState("bạn");

  useEffect(() => {
    const name = new URLSearchParams(window.location.search).get("name");
    const trimmedName = name?.trim();

    if (trimmedName) {
      setGuestName(trimmedName);
    }
  }, []);

  const openWish = () => {
    setShowWish(!showWish);

    const pieces = Array.from({ length: 45 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      symbol: ["🌸", "✨", "💕", "🎀", "✦"][
        Math.floor(Math.random() * 5)
      ],
    }));

    setConfetti(pieces);

    setTimeout(() => setConfetti([]), 8000);
  };

  return (
    <main className="graduation-page">

      {confetti.map((item) => (
        <div
          key={item.id}
          className="petal"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: "20px",
          }}
        >
          {item.symbol}
        </div>
      ))}

      <div className="graduation-card">

        <span className="decor-star" style={{ top: 25, left: 25 }}>
          ✦
        </span>

        <span className="decor-star" style={{ top: 50, right: 25 }}>
          ✧
        </span>

        <div className="top-label">
          A SPECIAL DAY TO REMEMBER
        </div>

        <h1 className="graduation-title">
          Graduation 
          <span> Day!</span>
        </h1>

        <p className="subtitle">
          ✧ THE BEGINNING OF A NEW JOURNEY ✧
        </p>

        <div className="photos">

          <div className="photo-frame">
            <img
              src={`${basePath}/anh-tot-nghiep-2.jpg`}
              alt="Ảnh chân dung tốt nghiệp"
            />
            <p className="photo-caption">
              Beautiful memories
            </p>
          </div>

          <div className="photo-frame">
            <img
              src={`${basePath}/anh-tot-nghiep-1.jpg`}
              alt="Ảnh nhận bằng tốt nghiệp"
            />
            <p className="photo-caption">
              A new beginning
            </p>
          </div>

        </div>

        <section className="event-info" aria-label="Thông tin buổi lễ">
          <h2 className="event-info-title">THÔNG TIN BUỔI LỄ</h2>
          <div className="event-details">
          <div className="event-detail">
            <span className="event-icon" aria-hidden="true">📅</span>
            <span className="event-label">Ngày</span>
            <strong>08 tháng 11, 2026</strong>
          </div>
          <div className="event-detail">
            <span className="event-icon" aria-hidden="true">⏰</span>
            <span className="event-label">Thời gian</span>
            <strong>Từ 10h00 đến 11h30</strong>
          </div>
          <div className="event-detail">
            <span className="event-icon" aria-hidden="true">📍</span>
            <span className="event-label">Địa điểm</span>
            <strong>Sân E4 - Đại học Hutech khu E (Quận 9)</strong>
          </div>
          </div>
          <a
            className="map-button"
            href="https://www.google.com/maps/search/?api=1&query=S%C3%A2n+E4+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+HUTECH+khu+E+Qu%E1%BA%ADn+9"
            target="_blank"
            rel="noreferrer"
          >
            📍 Xem chỉ đường trên Google Maps
          </a>
        </section>

        <div className="graduation-cap">
          🎓
        </div>

        <h2 className="congrats-title">
          Congratulations!
        </h2>
        <div className="signature">
          Hẹn gặp <span className="guest-name">{guestName}</span> trong ngày đặc biệt này! ♡
        </div>

        <button
          className="wish-button"
          onClick={openWish}
        >
          ✨ Lời nhắn dành cho bạn ✨
        </button>

        {showWish && (
          <div className="hidden-wish">
            Sự hiện diện của bạn sẽ làm ngày hôm nay
            <br />
            trở nên đặc biệt và đáng nhớ hơn rất nhiều!
            <br />
            Rất mong được gặp bạn tại buổi lễ tốt nghiệp.
            <br />
            <br />
            Hẹn gặp bạn nhé! 💕
          </div>
        )}

        <div className="footer">
          CLASS OF 2026 · FOREVER PROUD
        </div>

      </div>
    </main>
  );
}
