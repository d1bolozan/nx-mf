import { Paginator as PrimePaginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { FC, useEffect, useState } from "react";

type PaginatorProps = {
  currentPage: number;
  pageCount: number;
  currentRows: number;
  setPage: (page: number, rows: number) => Promise<void>;
};

const Paginator: FC<PaginatorProps> = ({ currentPage, pageCount, setPage, currentRows }) => {
  const [first, setFirst] = useState<number>((currentPage - 1) * currentRows);
  const [rows, setRows] = useState<number>(currentRows);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page + 1, event.rows);
  };

  useEffect(() => {
    setFirst((currentPage - 1) * currentRows);
    setRows(currentRows);
  }, [currentPage, currentRows]);

  return (
    <div className="mx-auto mt-auto flex flex-shrink-0 justify-center gap-1">
      <PrimePaginator
        first={first}
        rows={rows}
        rowsPerPageOptions={[12, 24, 48]}
        totalRecords={pageCount * currentRows}
        onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        pt={{
          pageButton: ({ context }: { context: { active: boolean } }) => ({
            className: context.active ? "bg-primary text-white" : undefined
          })
        }}
      />
    </div>
  );
};

export default Paginator;
