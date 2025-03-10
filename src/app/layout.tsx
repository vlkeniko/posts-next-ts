import "./global.css";
import Navbar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
