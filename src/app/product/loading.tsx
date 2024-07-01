export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <div className="bg-muted rounded-lg animate-pulse h-[500px]" />
          <div className="hidden md:flex gap-4 items-start">
            <div className="bg-muted rounded-lg animate-pulse w-[100px] h-[100px]" />
            <div className="bg-muted rounded-lg animate-pulse w-[100px] h-[100px]" />
            <div className="bg-muted rounded-lg animate-pulse w-[100px] h-[100px]" />
            <div className="bg-muted rounded-lg animate-pulse w-[100px] h-[100px]" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <div className="bg-muted rounded-lg animate-pulse h-6 w-20" />
          <div className="bg-muted rounded-lg animate-pulse h-8" />
          <div className="bg-muted rounded-lg animate-pulse h-8" />
          <div className="bg-muted rounded-lg animate-pulse h-3 w-3/4" />
          <div className="bg-muted rounded-lg animate-pulse h-3 w-3/4" />
          <div className="bg-muted rounded-lg animate-pulse h-3 w-3/4" />
          <div className="bg-muted rounded-lg animate-pulse h-3 w-3/4" />
          <div className="bg-muted rounded-lg animate-pulse h-6 w-24" />
          <div className="bg-muted rounded-lg animate-pulse h-8 w-1/2" />
        </div>
      </div>
    </div>
  );
}
