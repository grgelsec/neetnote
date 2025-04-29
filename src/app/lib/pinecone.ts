import { Pinecone } from "@pinecone-database/pinecone";

export const pc = new Pinecone({
  apiKey: `${process.env.DB_PINECONE_KEY}`,
});

export const neetNoteIndex = pc.index("neetnote", process.env.DB_PINECONE_HOST);

const fetchResult = await neetNoteIndex.fetch(["note1"]);

console.log(fetchResult);
