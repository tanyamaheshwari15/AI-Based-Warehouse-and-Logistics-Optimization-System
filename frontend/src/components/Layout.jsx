import { Outlet } from "react-router-dom";
import useSession from "../useSession.js";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const { user, signOut } = useSession();

  return (
    <div className="app-layout">
      <div className="app-sidebar-column">
        <Sidebar user={user} />
      </div>
      <div className="app-main-column">
        <Header onSignOut={signOut} />
        <main className="app-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}