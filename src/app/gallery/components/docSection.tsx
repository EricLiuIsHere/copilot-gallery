import DocCard from './docCard';
import Docs from '../common/docs';
import { Doc } from '../common/docs';


interface DocSectionProps {
  title: string;
  description: string;
  docs: Doc[];
}

function DocSection({ title, description,docs }: DocSectionProps) {
  // const filteredDocs = Docs.filter((doc) => {
  //   const { title, description, tags } = doc;
  //   const lowerCaseFilter = filter.toLowerCase();

  //   return (
  //     title.toLowerCase().includes(lowerCaseFilter) ||
  //     description.toLowerCase().includes(lowerCaseFilter) ||
  //     tags?.some((tag) => tag.toLowerCase().includes(lowerCaseFilter))
  //   );
  // });

  return (
    <div className="py-10 px-4 my-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-9 place-items-center">
        {docs.map((doc: Doc) => (
          <DocCard
            key={doc.docUrl}
            title={doc.title}
            description={doc.description}
            docUrl={doc.docUrl}
            tags={doc.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default DocSection;