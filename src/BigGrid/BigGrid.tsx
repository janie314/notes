import {
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  TableColumnDefinition,
} from "@fluentui/react-components";
import { Note } from "../App";

const columns: TableColumnDefinition<Note>[] = [
  createTableColumn<Note>({
    columnId: "note_id",
    renderHeaderCell: () => {
      return "ID";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.id}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Note>({
    columnId: "note",
    renderHeaderCell: () => {
      return "Note";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.note}
        </TableCellLayout>
      );
    },
  }),
];

function BigGrid(props: { notes: Note[] }) {
  return (
    <DataGrid
      items={props.notes}
      columns={columns}
      resizableColumns={true}
      resizableColumnsOptions={{ autoFitColumns: true }}
    >
      <DataGridHeader>
        <DataGridRow
          selectionCell={{
            checkboxIndicator: { "aria-label": "Select all rows" },
          }}
        >
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Note>>
        {({ item, rowId }) => (
          <DataGridRow<Note>
            key={rowId}
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select row" },
            }}
          >
            {({ renderCell }) => <DataGridCell>{renderCell(item)}
            </DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
}

export { BigGrid };
