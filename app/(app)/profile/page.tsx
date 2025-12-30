import ProfilePageComponent from "@/components/pages/profile";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Profile</h1>
      <ProfilePageComponent />
    </div>
  );
}
