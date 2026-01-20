import { Suspense } from "react";
import ClientHome from "./home-page-client";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <Suspense fallback={<>...</>}>
      <ClientHome searchParams={searchParams} />
    </Suspense>
  );
}
