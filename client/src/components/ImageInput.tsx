import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageInput = ({ onChange }: { onChange: (value: string) => void }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div
        className="bg-gray-100 rounded-md min-h-[150px] border-dashed border-2
      flex items-center justify-center
      "
      >
        {isDragActive ? (
          <p
            className="
          text-[14px] text-primary-600 text-center
          "
          >
            Drop the files here ...
          </p>
        ) : (
          <p
            className="
          text-[14px] text-gray-600 text-center
          "
          >
            Drag 'n' drop image here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
