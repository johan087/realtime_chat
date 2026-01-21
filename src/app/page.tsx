import { Suspense } from "react";
import ClientHome from "./home-page-client";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  return (
    <Suspense fallback={<>...</>}>
      <ClientHome searchParams={params} />
    </Suspense>
  );
}
