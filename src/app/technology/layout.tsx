import mobile from "@/assets/technology/background-technology-mobile.jpg";
import tablet from "@/assets/technology/background-technology-tablet.jpg";
import desktop from "@/assets/technology/background-technology-desktop.jpg";

import Background from "@/components/Background";
import { ReactNode } from "react";
import MotionDiv from "@/components/MotionDiv";

export default function TechnologyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      {children}
    </MotionDiv>
  );
}
