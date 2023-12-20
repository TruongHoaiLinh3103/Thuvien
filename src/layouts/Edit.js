"use client";

import React, {useState} from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from 'draft-js';
import { ContentState, convertToRaw } from 'draft-js';
import "../styles/edit.scss";

const Edit = () => {
    const _contentState = ContentState.createFromText('Sample content state');
    const raw = convertToRaw(_contentState);  // RawDraftContentState JSON
    const [contentState, setContentState] = useState(raw); // ContentState JSON
    return (
        <Editor
            // editorState={Content}
            defaultEditorState={contentState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={setContentState}
        />
    );
};

export default Edit;