import { Navbar } from "@/src/components/Hero/Navbar"
import { Images } from "@/src/components/IndividualProduct/Images"
import { ProductContent } from "@/src/components/IndividualProduct/ProductContent"
import { SectionBlank } from "@/src/components/reusable/SectionBlank"

type Params = Promise<{id : string}>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata(props: {
    params: Params
    searchParams: SearchParams
  }) {
    const params = await props.params
    const searchParams = await props.searchParams
    const id = params.id
    const query = searchParams.query
  }

export default async function IndividualProductPage({ params }: { params: Params }) {
    
    const {id} = await params

    return(
        <main className="relative min-h-screen bg-bg-color">
            <Navbar/>
            <SectionBlank className="flex-row items-start px-10 gap-10">
                <Images/>
                <ProductContent/>
            </SectionBlank>
        </main>
    )

}