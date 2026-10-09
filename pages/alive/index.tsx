import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function DocsPage() {
  const [data, setData] = useState(null);
  const [datab, setDatab] = useState(null);
  const [datac, setDatac] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call your Next.js API route using a relative path
    fetch("/api/alive/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    fetch("/api/alive/datab")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDatab(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    fetch("/api/alive/datac")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDatac(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(data);
  console.log(datab);
  console.log(datac);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Keep alive</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
