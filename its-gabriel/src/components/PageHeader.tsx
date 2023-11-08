import { ReactNode } from "react";

interface Props {
    pageTitle: string;
    children: ReactNode;
}

export default function PageHeader({ pageTitle, children }: Props) {
    return (
        <div className="flex flex-col h-full w-full divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-5 pt-3 md:space-y-5">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14">
                    {pageTitle}
                </h1>
            </div>
            {children}
        </div>
    );
}