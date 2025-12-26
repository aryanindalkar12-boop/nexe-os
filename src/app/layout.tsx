import { base, heading, handwriting } from "@/constants";
import "@/app/globals.css";
import { cn, generateMetadata } from "@/utils";
import Providers from "@/components/global/providers";
import FlareCursor from "@/components/global/flare-cursor";
import LoadingScreen from "@/components/global/loading-screen";

export const metadata = generateMetadata({
  title: "Nexe OS",
  description:
    "Manage Agency for Freelancers and Creators - Streamline your projects, clients, and finances with Nexe OS. The ultimate all-in-one management solution designed for freelancers and creators.",
  icons: {
    icon: "/icons/fav.png",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-background text-foreground font-base antialiased overflow-x-hidden dark",
          base.variable,
          heading.variable,
          handwriting.variable
        )}
      >
        <Providers>
          <LoadingScreen />
          <FlareCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
