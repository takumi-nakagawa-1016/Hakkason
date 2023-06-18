import React from 'react';
import { createRoot } from 'react-dom/client';
import Test from "./components/Test";

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!);



root.render(
    <Test/>
);
