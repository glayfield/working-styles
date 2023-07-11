export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <a href="https://github.com/glayfield" className="hover:underline">Graham Layfield</a>.</span>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a target="_blank" href="https://icons8.com/icon/oRBt2rHxvhPg/strength">Strength</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Photo by <a href="https://unsplash.com/ko/@frantic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Kotliarskyi</a> on <a href="https://unsplash.com/photos/QBpZGqEMsKg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
            </div>
        </footer>
    )
}