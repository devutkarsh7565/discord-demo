import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>protected router</h1>
      <UserButton afterSignOutUrl="/"/>
    </>
  );
}
