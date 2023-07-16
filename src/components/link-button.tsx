import Link from "next/link";

export default function LinkButton({ route, text }: { route: string, text: string }) {
    return (
        <Link href={route} className="rounded-md bg-white px-3.5 py-2.5 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {text}
        </Link>
    );
}
