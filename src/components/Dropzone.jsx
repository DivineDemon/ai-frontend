import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  console.log(files);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 border border-dashed border-gray-400 rounded-lg p-3 cursor-pointer hover:underline">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag & drop, or click to select files</p>
      </div>
    </div>
  );
};

export default Dropzone;
