
import "./globals.css";

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body>
       
        {/* Main Page Content */}
        {children}
      </body>
    </html>
  );
}
