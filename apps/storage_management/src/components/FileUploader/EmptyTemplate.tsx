type EmptyTemplateProps = {
  openUploadDialog: () => void;
};

const EmptyTemplate = ({ openUploadDialog }: EmptyTemplateProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={openUploadDialog}
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800"
      >
        <div className="flex flex-col items-center justify-center gap-2 p-3">
          <i
            className="pi pi-fw pi-upload "
            style={{
              fontSize: "2em",
              borderRadius: "50%",
              color: "text-gray-500"
            }}
          ></i>
          <p className=" text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyTemplate;
