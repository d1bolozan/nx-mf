import FilesPage from "../pages/FilesPage";

type AppProps = {
  entityType?: string;
  entityId?: number;
};

export function App({ entityId, entityType }: AppProps) {
  return <FilesPage entityId={entityId} entityType={entityType} />;
}

export default App;
