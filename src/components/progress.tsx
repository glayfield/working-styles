export default function Progress({ progress }: { progress: number }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-15 dark:bg-gray-700">
            <div className="bg-blue-600 h-15 rounded-fullbg-blue-600 text-xs font-medium dark:text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
    );
}
