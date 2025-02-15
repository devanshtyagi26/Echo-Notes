import "./Style/body.css";
export const metadata = {
  title: "Echo Notes",
  description: "Crafted by Devansh Tyagi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
