import { Card } from "@heroui/react";
import { useRouter } from "next/router";
import { CheckCircleIcon, OctagonMinus } from "lucide-react";

export default function VerifyQr({
  cert_id,
  data,
}: {
  cert_id: any;
  data: any;
}) {
  const student = data?.filter((item: any) => item.id === cert_id);
  const student_data = student[0];

  return (
    <div>
      {student?.length > 0 ? (
        <Card className="p-6 bg-green-50 border-green-200 shadow-lg">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-green-900">
              Certificate Valid
            </h3>
            <CheckCircleIcon className="h-8 w-8 text-green-400" />
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-600">
                Student Name
              </p>
              <p className="text-lg text-gray-900">{student_data?.name}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-600">
                Certificate Type
              </p>
              <p className="text-lg text-gray-900">Computer Packages</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-600">Issue Date</p>
              <p className="text-lg text-gray-900 text-green-700 font-semibold">
                {new Date(student_data?.issue_date).toLocaleDateString()}
              </p>
            </div>

            <div className="pt-4 border-t border-green-200">
              <p className="text-sm text-green-700">
                This certificate is valid and issue under{" "}
                <strong>Magnet Computer School</strong>
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-6 bg-red-50 border-red-200 shadow-lg">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-red-900">
              Records Not Found!
            </h3>
            <OctagonMinus className="h-8 w-8 text-red-400" />
          </div>
        </Card>
      )}
    </div>
  );
}
