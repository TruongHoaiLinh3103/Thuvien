import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Edit = () => {
    const [Content, setContent] = useState([]);
    return (
        <CKEditor
            editor={ ClassicEditor }
            data={Content}
            onReady={ editor => {
                editor.editing.view.change((writer) => {
                    writer.setStyle("height", "150px", editor.editing.view.document.getRoot())
                })
            }}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setContent(...Content, data)
                console.log(Content)
            } }
        />
    );
};

export default Edit;