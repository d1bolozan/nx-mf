import "@cyntler/react-doc-viewer/dist/index.css";

import DocViewer, { DocViewerRenderers, IDocument } from "@cyntler/react-doc-viewer";
import { useEffect, useState } from "react";

function DocumentPreview({ fileName, fileUrl }: { fileName: string; fileUrl: string }) {
  const [doc, setDoc] = useState<IDocument[]>([]);

  useEffect(() => {
    setDoc([{ uri: fileUrl, fileName: fileName }]);
  }, [fileUrl, fileName]);

  return (
    <DocViewer
      documents={doc}
      pluginRenderers={DocViewerRenderers}
      config={{
        header: {
          disableFileName: true
        },

        pdfVerticalScrollByDefault: true
      }}
    />
  );
}

export default DocumentPreview;
