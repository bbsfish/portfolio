import "@/styles/style.scss";
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";

export const metadata = {
  title: "my portfolio",
  description: "hosoda yoshiki's portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <HeaderMenu />
        <main style={{ paddingTop: '90px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}