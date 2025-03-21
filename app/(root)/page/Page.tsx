import { Suspense } from "react";
import Page from "./Page"; // Import the Client Component

export default function RootPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
