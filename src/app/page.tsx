import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { perks } from "./perks";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl">
            Your sole marketplace for high-quality{" "}
            <span className="text-blue-500">digital assets</span>.
          </h1>
          <p className="my-[4rem] text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalAppo. Every single asset is verified by our
            talented team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row mt-3 gap-4">
            <Link href="/products" className={buttonVariants()}>
              Browse Trendings
            </Link>
            <Button variant="outline">Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="font-medium text-gray-900 text-base">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
