export default function Resume() {
    return (
        <div className="flex flex-col h-full w-full divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-5 pt-6 md:space-y-5">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
                    Resume
                </h1>
            </div>
            <iframe src="/gabriel_lahman_resume.pdf" className="flex-grow" />
        </div>
    );
}