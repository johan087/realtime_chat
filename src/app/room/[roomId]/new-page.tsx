import { Suspense } from "react";
import ClientSearch from "./client-search";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ roomId?: string }>;
}) {
  return (
    <Suspense fallback={<>...</>}>
      <ClientSearch searchParams={searchParams} />
    </Suspense>
  );
}
