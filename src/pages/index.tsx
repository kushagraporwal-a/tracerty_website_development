import OutlineButton from "@/components/common/OutlineButton";
import PrimaryButton from "@/components/common/PrimaryButton";
import SeoHead from "@/components/layout/SeoHead";
import { THEME } from "@/data/theme";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <SeoHead
        title="Tracerty | FSMA 204 Compliance Intelligence"
        description="Bridge the first-mile data gap and turn FSMA 204 compliance into supply chain intelligence with Tracerty."
        canonicalPath="/"
      />
      <section className="mx-4 py-16 md:mx-10 lg:mx-auto">
        <h1
          className="mb-8 text-5xl leading-tight lg:text-6xl"
          style={{ color: THEME.colors.textPrimary }}
        >
          <span className="font-bold">FSMA 204</span> Compliance as
          <br />
          <span className="font-normal">a Catalyst for Supply Chain Intelligence</span>
        </h1>

        <div
          className="mb-8 h-52 w-full rounded-md bg-cover"
          style={{
            backgroundColor: THEME.colors.backgroundTone,
          }}
          aria-label="Horizontal animation placeholder"
        />

        <p
          className="mb-4 px-4 text-center font-normal md:px-8 lg:px-12"
          style={{ color: THEME.colors.backgroundDarkTone }}
        >
          {`Bridge the "First Mile" data gap without disrupting your workflow.`}
          <strong>{` Tracerty's Zero-Typing AI digitizes field operations in days`}</strong>
          {`, unifying supply chain operations while turning compliance into a competitive asset for waste avoidance and sustainability.`}
        </p>

        <div className="flex justify-center">
          <OutlineButton type="button" className="mb-8">
            Request a Demo
          </OutlineButton>
        </div>

        <div className="flex justify-center mb-2">
          <p className="mb-2 text-sm font-normal" style={{ color: THEME.colors.footerMutedText }}>
            Scroll to explore
          </p>
        </div>
        <div className="flex justify-center">
          <ArrowDown size={18} color={THEME.colors.footerMutedText} />
        </div>
      </section>

      <section
        className="relative left-1/2 mb-16 w-screen -translate-x-1/2 py-16"
        style={{ backgroundColor: THEME.colors.backgroundDarkTone }}
      >
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-10 items-start gap-8">
            <div className="col-span-7">
              <h2 className="mb-4 text-3xl font-bold text-white">FSMA 204</h2>
              <p className="text-lg font-normal text-white">
                {`The FDA Food Traceability Rule requires end-to-end traceability across high risk foods, fundamentally changing how the supply chain operates.`}
              </p>
            </div>
            <div className="col-span-3">
              <div className="mb-2 flex items-center gap-2">
                <p className="text-3xl font-bold text-white">AI powered</p>
                <Sparkles size={26} color={THEME.colors.white} className="-mt-6" fill="white"/>
              </div>
              <p className="text-3xl font-bold text-white">data collection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2
          className="flex items-center gap-4 text-5xl font-normal leading-tight lg:text-6xl"
          style={{ color: THEME.colors.backgroundDarkTone }}
        >
          <Image src="/assets/icons/pointer.svg" alt="Pointer icon" width={64} height={64} />
          <span>
            {`Scaling from a Federal Mandate to an`}
            <br />
            <span className="font-bold">{`Intelligent Food Supply Chain.`}</span>
          </span>
        </h2>

        <div className="mt-8 grid h-[50rem] grid-cols-4 gap-4">
          <div className="grid h-full grid-rows-[40%_60%] gap-4">
            <div
              className="relative overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-1.png')",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{ backgroundColor: THEME.homeGrid.box1.overlay }}
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-5">
                <div className="-mx-5 -mb-5 px-5 pb-5" style={{ backgroundImage: THEME.homeGrid.box1.textGradient }}>
                  <h3 className="mb-2 text-3xl font-bold leading-tight text-white">
                    {`Automated FSMA 204 Traceability`}
                  </h3>
                  <p className="text-base font-normal text-white">
                    {`Comprehensive compliance tracking for food safety modernization`}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex items-start rounded-2xl bg-cover bg-center p-5"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-5.png')",
              }}
            >
              <h3 className="text-3xl font-bold leading-tight text-white">{`Proactive Risk Management`}</h3>
            </div>
          </div>

          <div className="grid h-full grid-rows-[70%_30%] gap-4">
            <div
              className="flex items-start rounded-2xl bg-cover bg-center p-5"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-2.png')",
              }}
            >
              <div>
                <h3
                  className="mb-2 text-3xl font-bold leading-tight"
                  style={{ color: THEME.colors.textPrimary }}
                >
                  {`Intelligent`}
                  <br />
                  {`Farm & Field Operations`}
                </h3>
                <p className="text-base font-normal" style={{ color: THEME.colors.backgroundDarkTone }}>
                  {`Comprehensive compliance tracking for food safety modernization`}
                </p>
              </div>
            </div>
            <div
              className="flex items-start rounded-2xl bg-cover bg-center p-5"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-6.png')",
              }}
            >
              <div>
                <h3 className="mb-2 text-3xl font-bold leading-tight text-white">
                  {`Unifying supply chain operations`}
                </h3>
                <p className="text-base font-normal text-white">
                  {`Comprehensive compliance tracking for food safety modernization`}
                </p>
              </div>
            </div>
          </div>

          <div className="grid h-full grid-rows-[40%_60%] gap-4">
            <div
              className="flex items-start rounded-2xl bg-cover bg-center p-5"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-2.png')",
              }}
            >
              <div>
                <h3 className="mb-2 text-3xl font-bold leading-tight text-white">{`Universal Integration`}</h3>
                <p className="text-base font-normal" style={{ color: THEME.colors.textMutedLight }}>
                  {`Seamless connectivity across all your systems`}
                </p>
              </div>
            </div>
            <div
              className="flex items-end rounded-2xl bg-cover bg-center p-5"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-7.png')",
              }}
            >
              <div>
                <h3 className="mb-2 text-3xl font-bold leading-tight text-white">
                  {`Waste Avoidance and Sustainabilty`}
                </h3>
                <p className="text-base font-normal text-white">
                  {`Comprehensive compliance tracking for food safety modernization`}
                </p>
              </div>
            </div>
          </div>

          <div className="grid h-full grid-rows-[40%_60%] gap-4">
            <div
              className="flex flex-col items-center justify-center rounded-2xl bg-cover bg-center p-5 text-center"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-2.png')",
              }}
            >
              <h3 className="mb-2 text-3xl font-bold leading-tight text-white">
                {`Tracerty's "Zero-Typing" AI digitizes field operations in days,`}
              </h3>
              <p className="mb-4 text-base font-normal" style={{ color: THEME.colors.textMutedLight }}>
                {`compliance into a competitive asset`}
              </p>
              <PrimaryButton type="button">{`Request a Demo`}</PrimaryButton>
            </div>
            <div
              className="flex items-start rounded-2xl bg-cover bg-center p-5"
              style={{
                backgroundColor: THEME.colors.backgroundTone,
                backgroundImage: "url('/assets/home/image-grid-8.png')",
              }}
            >
              <div>
                <h3
                  className="mb-2 text-3xl font-bold leading-tight"
                  style={{ color: THEME.colors.backgroundDarkTone3 }}
                >
                  {`Total Supply Chain Visibliity`}
                </h3>
                <p className="text-base font-normal" style={{ color: THEME.colors.backgroundDarkTone3 }}>
                  {`End-to-end transparency from farm to table`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 mx-auto w-4/5">
        <div
          className="flex flex-row flex-wrap items-center gap-10 rounded-2xl px-12 py-6 shadow-lg"
          style={{
            backgroundColor: THEME.colors.ctaBoxBackground,
          }}
        >
          <p className="text-3xl font-normal" style={{ color: THEME.colors.backgroundDarkTone }}>
            {`Turn compliance into your competitive asset.`}
          </p>
          <span aria-hidden="true" className="text-3xl font-light" style={{ color: THEME.colors.textSecondary }}>
            |
          </span>
          <PrimaryButton type="button" onClick={() => router.push("/contact-us")}>
            {`Request a Demo`}
          </PrimaryButton>
        </div>
      </section>
    </>
  );
}
