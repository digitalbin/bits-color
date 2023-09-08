export default function Divider({ children }: { children: string }) {
  return (
    <div className="flex items-center my-2">
      <hr className="flex-1 border-neutral-700" />
      <span className="mx-2">{children}</span>
      <hr className="flex-1 border-neutral-700" />
    </div>
  );
}
