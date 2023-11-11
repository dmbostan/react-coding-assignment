type TeaserImage = {
    width: number,
    src: string
}

export type ArticleType = {
    identifier: number,
    title: string,
    link: string,
    subject: string,
    description: string,
    date: string,
    premium: number,
    image_url: string,
    teaser_image_urls: TeaserImage[]
}
