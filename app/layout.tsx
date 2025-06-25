// app/layout.tsx
export const metadata = {
  title: 'English Quiz Kids',
  description: 'Simple English quiz for kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
