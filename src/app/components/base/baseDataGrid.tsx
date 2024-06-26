import { DataGrid, GridRowsProp, GridColDef} from "@mui/x-data-grid";

interface BaseDataGridProps {
    rows: GridRowsProp;
    columns: GridColDef[]
}

export default function BaseDataGrid({rows, columns}: BaseDataGridProps) {
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    );
  }