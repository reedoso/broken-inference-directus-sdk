import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";


interface Schema {
    root: Root[]
    child: Child[]
}

interface Root {
    id: number;
    // Look here. 
    // This is number[] if it  selected without "deep" fields
    // This is Child[] is it  selected like "deep" fields
    child: number[] | Child[]
}

interface Child {
    id: number;
}



const client = createDirectus<Schema>('')
    .with(staticToken('ff'))
    .with(rest())

const data = await client.request(readItems('root', {fields: ['id','child']}))
data[0].
