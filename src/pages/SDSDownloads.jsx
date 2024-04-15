import Layout from '../components/Layout';
import downloads from '../../public/downloads/downloads.json';

function SHSDSDownloads() {
  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center h-[300px] bg-gradient-to-b from-black/70 bg-aqua-blue">
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold">SDS Sheet Downloads</h1>
          <p>Download the SDS Infosheet by clicking the document below.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 xl:container my-16">
        {downloads.map((category) => (
          <div key={category.title}>
            <h2 className="text-aqua-blue mb-5 underline underline-offset-[12px]">
              {category.title}
            </h2>
            {category.files.map((document, index) => (
              <div key={index} className="border-b-[1px] border-b-black py-2">
                <a
                  className="font-extralight text-xl"
                  href={`/downloads/${document.fileName}`}
                  download
                >
                  {document.fileName}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default SHSDSDownloads;
