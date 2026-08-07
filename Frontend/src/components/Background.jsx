export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}