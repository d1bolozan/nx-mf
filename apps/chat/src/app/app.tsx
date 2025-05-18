import { lazy, Suspense } from 'react';
import NxWelcome from './nx-welcome';

const FlowEditor = lazy(() => import('flow_editor/Module'));

export function App() {
  return (
    <div>
      <NxWelcome title="chat" />
      <div
        style={{
          width: 600,
          height: 600,
        }}
      >
        <Suspense fallback={null}>
          <FlowEditor />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
