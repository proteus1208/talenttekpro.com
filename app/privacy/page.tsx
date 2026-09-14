import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function Page() {
  return <StubPage title="Privacy" />;
}
