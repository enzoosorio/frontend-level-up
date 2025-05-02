import { Navbar } from "@/src/components/Hero/headerPart/Navbar"
import { Images } from "@/src/components/IndividualProduct/Images"
import { ProductContent } from "@/src/components/IndividualProduct/ProductContent"
import { SliderOtherProducts } from "@/src/components/IndividualProduct/SliderOtherProducts"
import { SectionBlank } from "@/src/components/reusable/SectionBlank"
import { getOtherProducts } from "@/src/utils/getOtherProducts"
type Params = Promise<{id : string}>
//type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// export async function generateMetadata(props: {
//     params: Params
//     searchParams: SearchParams
//   }) {
//    // const params = await props.params
//    // const searchParams = await props.searchParams
//    // const id = params.id
//   }

export default async function IndividualProductPage({ params }: { params: Params }) {
    
    const {id} = await params

    const otherProducts = await getOtherProducts()

    console.log({id})

    return(
        <main className="relative min-h-screen bg-bg-color overflow-x-hidden">
            <Navbar/>
            <SectionBlank className="flex flex-col md:flex-row items-start md:px-10 gap-10 py-2">
                <Images/>
                <ProductContent/>
            </SectionBlank>
            <section className="w-[90%] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-4 md:py-10">
                <SliderOtherProducts otherProducts={otherProducts} />
            </section>
        </main>
    )
}