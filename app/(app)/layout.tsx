import AppLayout from "@/components/layouts/appLayout";

export default function AppLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppLayout>
      <div className="">{children}</div>
    </AppLayout>
  );
}
