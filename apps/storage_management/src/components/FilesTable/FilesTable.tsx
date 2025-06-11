import { ConfirmDialog, Loader } from "@nx-mf/ui";
import UserDataService from "mdt_commons/userService";
import { Column } from "primereact/column";
import {
  DataTable,
  DataTableSelectionSingleChangeEvent,
  DataTableValueArray
} from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { FC, useEffect, useRef, useState } from "react";

import { environments } from "../../environments/environments";
import { Rights } from "../../types/enums/Rights";
import { IFile } from "../../types/interfaces";
import DataNotFoundCard from "../DataNotFoundCard";
import FilePreview from "../FilePreview/FilePreview";
import Paginator from "../Paginator";
import ActionCell from "./ActionCell";
import DateCell from "./DateCell";
import FileIconCell from "./FileIconCell";

type FilesTableProps = {
  isLoading: boolean;
  currentPage: number;
  currentRows: number;
  totalPages: number;
  files: Record<number, IFile[]>;
  entityType?: string;
  entityId?: string | number;
  onChangePage: (page: number, rows: number) => Promise<void>;
  onDeleteFile: (id: string) => void;
  fetchFilesList: () => void;
};

const FilesTable: FC<FilesTableProps> = ({
  currentPage,
  currentRows,
  fetchFilesList,
  files,
  isLoading,
  onChangePage,
  onDeleteFile,
  totalPages
}) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [deleteFileDialog, setDeleteFileDialog] = useState<boolean>(false);
  const [selectFile, setSelectedFile] = useState<IFile | null>(null);

  const dialogContentRef = useRef<HTMLDivElement | null>(null);
  const deleteFile = useRef<IFile | null>(null);

  useEffect(() => {
    fetchFilesList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectFile = (e: DataTableSelectionSingleChangeEvent<DataTableValueArray>) => {
    if (e && e.value) {
      setSelectedFile(e.value as IFile);
      return;
    }
    setSelectedFile(null);
  };

  const handleDeleteFile = (file: IFile) => {
    deleteFile.current = file;
    setDeleteFileDialog(true);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <DataTable
        className="flex h-full flex-col overflow-hidden text-base"
        dataKey="id"
        loading={isLoading}
        loadingIcon={<Loader />}
        emptyMessage={
          <DataNotFoundCard
            className=""
            titleMessage="Not found files"
            buttonLabel="Refresh"
            buttonIcon="pi pi-fw pi-refresh"
            onButtonClick={() => fetchFilesList()}
          />
        }
        value={files[currentPage]}
        selection={selectFile}
        onSelectionChange={onSelectFile}
        selectionMode="single"
        scrollable
        scrollHeight="flex"
        footer={
          <Paginator
            currentPage={currentPage}
            pageCount={totalPages}
            setPage={onChangePage}
            currentRows={currentRows}
          />
        }
        pt={{
          footer: {
            className: "p-0"
          },
          table: {
            className: `${(files[currentPage] ?? []).length === 0 ? "h-full" : "max-h-full"}`
          }
        }}
      >
        <Column
          field="mimeType"
          header="Type"
          body={({ mimeType }: IFile) => <FileIconCell type={mimeType} />}
        />
        <Column field="fileName" header="Name" />
        <Column field="filePath" header="Path" />
        <Column
          field="createdAt"
          header="Uploaded At"
          body={({ createdAt }: IFile) => <DateCell date={createdAt} />}
        />
        <Column
          field="updatedAt"
          header="Updated At"
          body={({ createdAt }: IFile) => <DateCell date={createdAt} />}
        />
        {/* <Column field="size" header="Size" body={({ size }: IFile) => formatFileSize(size)} /> */}
        {UserDataService.HasRight(environments.APP_NAME, Rights.DeleteFile) && (
          <Column
            header="Actions"
            body={(file: IFile) => (
              <ActionCell file={file} onDeleteFile={(file: IFile) => handleDeleteFile(file)} />
            )}
            style={{ width: "fit-content" }}
          />
        )}
      </DataTable>
      <Dialog
        resizable={false}
        header={selectFile?.fileName}
        visible={!!selectFile}
        onHide={() => {
          if (selectFile) {
            setSelectedFile(null);
          }
        }}
        onShow={() => {
          if (dialogContentRef && dialogContentRef.current) {
            const { width, height } = dialogContentRef.current.getBoundingClientRect();

            setWidth(width);
            setHeight(height);
          }
        }}
        style={{ minWidth: "640px", minHeight: "640px", width: "75vw", height: "95%" }}
      >
        <div ref={dialogContentRef} className="flex h-full  items-center justify-center">
          {selectFile && <FilePreview file={selectFile} width={width} height={height} />}
        </div>
      </Dialog>
      <ConfirmDialog
        buttonAcceptText="Delete"
        confirmType="delete"
        visible={deleteFileDialog}
        setVisible={setDeleteFileDialog}
        onSuccess={() => {
          if (deleteFile.current) {
            onDeleteFile(deleteFile.current.id);
          }
        }}
        onCancel={() => setDeleteFileDialog(false)}
      >
        {deleteFile.current && <p>File: {deleteFile.current.fileName} </p>}
      </ConfirmDialog>
    </div>
  );
};
export default FilesTable;
