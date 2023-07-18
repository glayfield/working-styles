export default function Container({
  children,
}: {
  children: Array<JSX.Element>;
}) {
  return (
    <div className="mx-auto py-4 sm:px-6 sm:py-8 lg:px-8">
      <div className="px-6 pt-2 pb-2 sm:rounded-3xl sm:px-8 lg:gap-x-10 lg:px-24 space-y-8 text-white text-center">
        {children}
      </div>
    </div>
  );
}
