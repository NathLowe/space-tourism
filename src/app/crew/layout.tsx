import mobile from "@/assets/crew/background-crew-mobile.jpg";
import tablet from "@/assets/crew/background-crew-tablet.jpg";
import desktop from "@/assets/crew/background-crew-desktop.jpg";

import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import { ReactNode } from "react";

export default function CrewLayout({ children }: { children: ReactNode }) {
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
