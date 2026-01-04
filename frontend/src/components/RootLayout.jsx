import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const area = document.getElementById("scrollArea");
    if (area) {
      area.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div id="scrollArea" style={{ overflowY: "auto", height: "100vh" }}>
      <Outlet />
    </div>
  );
}
