import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Cookies",
};

export default function Page() {
  return <StubPage title="Cookies" />;
}
