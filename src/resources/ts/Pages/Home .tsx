import React from 'react';
import { createRoot } from 'react-dom/client';
function App() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home Component</div>
                        <div className="card-body">I'm an home component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);