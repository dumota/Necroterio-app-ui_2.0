import { Avatar } from "@/components/retroui/Avatar";
import Link from "next/link";
import { Menu as MenuRetro } from "@/components/retroui/Menu";
import { useAuth } from "@/providers/AuthProvider";
import { ModeToggle } from "@/components/ui/toogleTheme";

export default function DesktopMenu() {
  const { Logout } = useAuth();
  return (
    <div className="flex items-center gap-4">
      <ModeToggle side="top"/>
      <Link href="/" className="text-neutral-50 text-sm">
        Home
      </Link>
      <Link href="/blog/newBlog" className="text-neutral-50 text-sm">
        Crie seu Blog
      </Link>
      <Link href="/" className="text-neutral-50 text-sm">
        Chat
      </Link>
      <Link href="/" className="text-neutral-50 text-sm">
        DashBoard
      </Link>
      <div>
        <MenuRetro>
          <MenuRetro.Trigger>
            <Avatar>
              <Avatar.Image src="broken-link" alt="Arif Logs" />
              <Avatar.Fallback className="text-neutral-50 text-sm">
                A
              </Avatar.Fallback>
            </Avatar>
          </MenuRetro.Trigger>
          <MenuRetro.Content align="start" side="bottom" alignOffset={-10}>
            <MenuRetro.Item>
              <Link href="/profile">Perfil</Link>
            </MenuRetro.Item>
            <MenuRetro.Item>
              <button onClick={Logout}>Logout</button>
            </MenuRetro.Item>
          </MenuRetro.Content>
        </MenuRetro>
      </div>
    </div>
  );
}
