export default function Loading() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          <span className="absolute text-lg font-semibold text-blue-500">Loading...</span>
        </div>
      </div>
    );
  }
  