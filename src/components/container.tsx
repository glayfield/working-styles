export default function Container({ children }: { children: Array<JSX.Element> }) {
    return (
        <div className="mx-auto max-w-6xl py-4 sm:px-6 sm:py-32 lg:px-8 ">
            <div className="dark:bg-gray-900 px-6 pt-6 pb-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 flex-col space-y-8 text-center">
                {children}
            </div>
        </div>
    );
}
