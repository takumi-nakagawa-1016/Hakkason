import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    // <React.StrictMode>
    <div className="text-red">
        Hello World
    </div>
// </React.StrictMode>,
);
