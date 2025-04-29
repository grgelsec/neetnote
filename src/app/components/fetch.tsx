import { neetNoteIndex } from "../lib/pinecone";
export const TestFunc = async () => {
  const fetchResult = await neetNoteIndex.fetch(["note1"]);
  return (
    <h1 className="text-white text-xl font-extralight">
      {fetchResult.records.note1.id}
    </h1>
  );
};
