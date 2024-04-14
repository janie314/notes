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
import { useState } from "react";

interface Item {
  id: number;
  note: string;
}

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
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
  createTableColumn<Item>({
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

function BigGrid() {
  const [items] = useState<Item[]>([{ id: 1, note: "conquer all" }]);
  return (
    <DataGrid
      items={items}
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
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item>
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
