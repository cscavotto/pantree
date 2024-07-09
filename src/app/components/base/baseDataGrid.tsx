"use client";

import { Button, Modal } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridRowModesModel, GridRowModes, GridToolbarContainer, GridRowId, GridSlots, GridEventListener, GridRowEditStopReasons, GridRowModel, GridActionsCellItem} from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  randomId
} from '@mui/x-data-grid-generator';
import { useState } from "react";
import { getRecipeDetails, updatePantryItem, updateRecipeRow } from "@/app/services/service";
import RecipeDetails from "../recipeDetails";
import { Recipe } from "@/app/interfaces/receipe";
import { ListTypeEnum } from "@/app/enums/listType";

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
  newRow: any
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, newRow } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, {id, ...newRow}]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

interface BaseDataGridProps {
    initialRows: GridRowsProp;
    initialColumns: GridColDef[],
    newRow: any,
    type: ListTypeEnum, // a bit of a hack that isn't extensible to more than 2 screens
    hasDetails?: boolean
}

export default function BaseDataGrid({initialRows, initialColumns, newRow, hasDetails = false, type}: BaseDataGridProps) {
  const [rows, setRows] = useState(initialRows);
  const [recipe, setReceipe] = useState<Recipe | null>(null);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const columns: GridColDef[] = [...initialColumns, {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            sx={{
              color: 'primary.main',
            }}
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }

      let actions: any[] =
      [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];

      if (hasDetails) {
        actions.push(<GridActionsCellItem
          icon={<MenuIcon />}
          label="Details"
          onClick={handleDetailsClick(id)}
          color="inherit"
      />)
      }

      return actions
    },
  },]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDetailsClick = (id: GridRowId) => () => {
    if (type == ListTypeEnum.RECIPE){
      const r = getRecipeDetails(id);
      setReceipe(r);
    }
   
    handleOpen();
  }

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    // Don't love this here, but leaving for now so I can work on other things
    if (type == ListTypeEnum.RECIPE) {
      updateRecipeRow(updatedRow);
    }
    else if (type == ListTypeEnum.PANTRY) {
      updatePantryItem(updatedRow);
    }
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar as GridSlots['toolbar'],
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel, newRow },
          }}
        />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <RecipeDetails recipe={recipe}/>
        </Modal>
      </div>
    );
  }