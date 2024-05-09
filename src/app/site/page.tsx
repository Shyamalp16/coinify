import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px, transparent_1px), linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem][mask-image:radial-gradient(eclipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
        {/* <p className="text-center"> Manage All Your Crypto Needs, in one place!</p> */}
        <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
          <h1 className="text-8xl font-bold text-center md:text-[300px] mt-20"> Coinify</h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]"> 
          <Image  src={'/assets/preview.png'} alt='Banner image' height={900} width={1100} className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted mt-20"/>
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute"></div>
        </div>
      </section>
      
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
        <h2 className="text-4xl text-center pt-20 mt-20"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center"> Our pricing plans are tailored to meet your needs!</p>
        <div className="flex justify-center gap-4 flex-wrap mt-20">
          {pricingCards.map((card) => 
          <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {
            'border-2 border-primary': card.title === 'Unlimited Saas',
          })}> 
            <CardHeader> 
              <CardTitle className={clsx('',{'text-muted-foreground':card.title !== "Unlimited Saas"})}> {card.title}</CardTitle>
              <CardDescription> {card.description} </CardDescription>
            </CardHeader>
            <CardContent> 
              <span className="text-4xl font-bold"> {card.price}</span>
              <span className="text-4xl font-bold"> /m</span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <Check className="text-muted-foreground" />
                    <p> {feature} </p>
                  </div>
                ))}
              </div>
              <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    'w-full text-center bg-primary p-2 rounded-md',
                    {
                      '!bg-muted-foreground':
                        card.title !== 'Unlimited Saas',
                    }
                  )}
                >
                  Get Started
                </Link>
            </CardFooter>
          </Card>
          )}
        </div>
      </section>
    </>
  );
}
