import "./globals.css";
import { ReduxProvider } from "./providers";

export const metadata = {
  title: "Task Dashboard",
  description: "Panel de tareas con Next.js + Redux + CSS Modules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
