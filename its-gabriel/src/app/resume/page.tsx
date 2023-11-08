import PageHeader from "@/components/PageHeader";

export default function Resume() {
    return (
        <PageHeader pageTitle="Resume">
            <iframe src="/gabriel_lahman_resume.pdf" className="flex-grow" />
        </PageHeader>
    );
}