import mobile from "@/assets/destination/background-destination-mobile.jpg";
import tablet from "@/assets/destination/background-destination-tablet.jpg";
import desktop from "@/assets/destination/background-destination-desktop.jpg";

import Background from "@/components/Background";
import { ReactNode } from "react";
import MotionDiv from "@/components/MotionDiv";

export default function DestinationLayout({
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
