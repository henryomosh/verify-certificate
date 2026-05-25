import DefaultLayout from "@/layouts/default";
import VerifyQr from "@/components/pages/verify/verify";
import { useRouter } from "next/router";

const mockStudentData = [
  {
    id: "036a1156-1b65-4011-a4ba-2a87371c62e3",
    name: "Blessing Bwayo",
    start_date: "01-05-2026",
    end_date: "29-05-2026",
    issue_date: "2026-05-29",
  },
  {
    id: "056576dd-d554-4b3e-a856-be876ab407b0",
    name: "Faith Bwayo",
    start_date: "01-05-2026",
    end_date: "29-05-2026",
    issue_date: "2026-05-29",
  },
  {
    id: "06197634-2073-42c6-9fd4-cae87d933471",
    name: "",
    start_date: "01-05-2026",
    end_date: "29-05-2026",
    issue_date: "2026-05-29",
  },
];
export default function DocsPage() {
  const router = useRouter();
  const { student_id } = router.query;

  console.log(student_id);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <VerifyQr cert_id={student_id} data={mockStudentData} />
      </section>
    </DefaultLayout>
  );
}
