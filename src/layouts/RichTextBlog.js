import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichTextBlog = (props) => {
    return (
        <>
            <Editor
                value={props.value}
                onEditorChange={(newContent, editor) => {
                    props.content(newContent);
                }}
                apiKey='7tuarpj1zb4r4kxc8x2ayzox2igxvcrli20jwh97plm9pjk9'
                init={{
                    height: 540,
                    plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
            />
      </>
    );
};

export default RichTextBlog;