import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Magnet&nbsp;</span>
          <span className={title({ color: "blue" })}>Computer&nbsp;</span>
          <br />
          <span className={title()}>
            School
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Your gateway to digital excellence
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
