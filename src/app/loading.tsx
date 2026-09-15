import { Suspense } from "react";

function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="loader-ring h-12 w-12 rounded-full border-4 border-green/30 border-t-green" />
        <p className="text-sm text-gray-text">Loading...</p>
      </div>
    </div>
  );
}

export default function Loading() {
  return <LoadingSpinner />;
}
