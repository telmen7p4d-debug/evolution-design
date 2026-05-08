// Minimal root layout — locale-specific layout in [locale]/layout.tsx handles html/body.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
