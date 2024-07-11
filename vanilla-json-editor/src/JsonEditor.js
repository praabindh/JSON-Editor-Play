// src/JsonEditor.js

import React, { useEffect, useRef } from 'react';
import { JSONEditor } from 'vanilla-jsoneditor';

const JsonEditor = ({ json, onChange }) => {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            editorRef.current = new JSONEditor({
                target: containerRef.current,
                props: {
                    content: json,
                    onChange: (updatedJson) => {
                        onChange(updatedJson);
                    },
                },
            });

            return () => {
                if (editorRef.current) {
                    editorRef.current.destroy();
                }
            };
        }
    }, [json, onChange]);

    return <div ref={containerRef} style={{ height: '500px', border: '1px solid black' }} />;
};

export default JsonEditor;
