import { Suspense } from "react";
import PageClient from "./PageClient"; // Import the Client Component

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageClient />
    </Suspense>
  );
}
