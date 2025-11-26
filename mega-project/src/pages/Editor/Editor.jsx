import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import config from '../../config/config';
import { Controller } from 'react-hook-form';

function TextEditor({ name, control, defaultValue = "" }) {
  const [height] = useState(window.innerHeight);
  return (
    <div className="w-full">
      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            className="my-6"
            apiKey={config.TinyMceApiKey}
            initialValue={defaultValue}
            init={{
              height: height - 100,
              branding: false,
              menu: {
                file: { title: 'File', items: 'preview | print ' },
                edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                view: { title: 'View', items: 'code suggestededits revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
                insert: { title: 'Insert', items: 'image link media addcomment pageembed codesample inserttable | math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
                format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
                tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
                table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
                help: { title: 'Help', items: 'help' }
              },
              plugins: [
                'a11ychecker', 'advcode', 'advlist', 'anchor', 'autolink', 'codesample', 'fullscreen', 'help',
                'image', 'link', 'lists', 'media', 'powerpaste', 'preview', 'searchreplace', 'table', 'visualblocks', 'wordcount',
              ],
              toolbar: 'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}

export default TextEditor;