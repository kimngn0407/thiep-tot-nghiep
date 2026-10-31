
import "./globals.css";

export const metadata = {
  title: "Graduation Day 🎓",
  description: "A special day to remember - Congratulations!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
