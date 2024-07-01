import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh_-_156px)] flex flex-col justify-center items-center">
      <div title="404" className="notFound text-9xl">
        404
      </div>
      <h2 className="text-3xl">Not Found</h2>
      <Link href="/">
        <Button className="mt-14">Return Home</Button>
      </Link>
    </div>
  );
}
