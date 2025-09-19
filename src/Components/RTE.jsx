import React from 'react'
import { Controller } from 'react-hook-form'
import {Editor } from '@tinymce/tinymce-react';
 
 function RTE({name,control,lable,defaultValue=""}) {
  return (
    <div className='w-full'>
    {lable && <lable className='inline-block mb-1 pl-1'>
    {lable}</lable>}

    <Controller
    name={name||"content"}
    control={control}
    render={({field:{onChange}})=>( 
           <Editor
           apiKey="p0kx6bhb7hvlcgq3plthsmvz15msh87h50qrf0o58a9wwl5e"
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />
    </div>
  )
}
 export default RTE