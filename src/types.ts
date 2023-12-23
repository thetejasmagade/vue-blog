type Blog = {
    id: number | null,
    title: string | null,
    content: any,
    author: string | null,
    image: string | null,
    date: Date | null,
}

type Blogs = Array<Blog>


export type {
    Blog,
    Blogs
}