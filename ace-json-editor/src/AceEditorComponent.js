// src/AceEditorComponent.js

import React from 'react';
import AceEditor from 'react-ace';

// Import a mode and a theme (additional modes/themes can be imported similarly)
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';

const AceEditorComponent = ({ value, onChange }) => {
    return (
        <AceEditor
            mode="json"
            theme="github"
            name="ace-editor"
            value={value}
            onChange={onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
            style={{ width: '100%', height: '500px' }}
        />
    );
};

export default AceEditorComponent;
