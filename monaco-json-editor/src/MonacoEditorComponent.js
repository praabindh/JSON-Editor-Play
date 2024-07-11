// src/MonacoEditorComponent.js

import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const MonacoEditorComponent = ({ value, onChange }) => {
    const editorDidMount = (editor, monaco) => {
        console.log('editorDidMount', editor);
        editor.onDidChangeModelContent(() => {
            if (typeof onChange === 'function') {
                onChange(editor.getValue());  // Call onChange with updated value
            }
        });
    };

    return (
        <MonacoEditor
            width="100%"
            height="500"
            language="json"
            theme="vs-dark"
            value={value}
            options={{
                selectOnLineNumbers: true,
            }}
            editorDidMount={editorDidMount}
        />
    );
};

export default MonacoEditorComponent;
