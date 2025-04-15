
interface HamburgerCategories {
    id: number
    title: string
    link: string
    slug: string
    imageUrl: string
}

export const hamburgerCategories : HamburgerCategories[] = [
    {
        id: 1,
        title: 'Ropa deportiva',
        link: '/products/ropa-deportiva',
        slug: 'ropa-deportiva',
        imageUrl: '/Hero/images/ropa-deportiva1.avif',
    },
    {
        id: 2,
        title: 'Productos para invierno',
        link: '/products/invierno',
        slug: 'invierno',
        imageUrl: '/Hero/images/the-north-face-invierno.avif',
    },
    {
        id: 3,
        title: 'Productos para verano',
        link: '/products/verano',
        slug: 'verano',
        imageUrl: '/Hero/images/crocs-verano.avif',
    },
    {
        id: 4,
        title: 'Accesorios tecnológicos',
        link: '/products/accesorios-tecnologicos',
        slug: 'accesorios-tecnologicos',
        imageUrl: '/Hero/images/accesories-tech.avif',
    },
    {
        id: 5,
        title: 'Funko pops y colecciones',
        link: '/products/colecciones',
        slug: 'colecciones',
        imageUrl:'/Hero/images/funko-pop.avif',
    },
    {
        id: 6,
        title: 'Productos artesanales',
        link: '/products/productos-artesanales',
        slug: 'productos-artesanales',
        imageUrl: '/Hero/images/cara-feliz-tie-dye.avif',
    }
]