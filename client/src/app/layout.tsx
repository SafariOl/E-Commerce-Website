import { metadata } from './metadata';
import RootLayout from './RootLayout';

export const layoutMetadata = metadata;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
)
}
