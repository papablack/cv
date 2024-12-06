import React from 'react';
import { createRoot } from 'react-dom/client';
import CV from './cv';

const root = createRoot(document.getElementById('root')!);
root.render(<CV />);