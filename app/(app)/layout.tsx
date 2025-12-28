import AppLayout from "@/components/layouts/appLayout";

export default function AppLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}
