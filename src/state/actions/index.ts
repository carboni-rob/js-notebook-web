import { ActionTypes } from "../action-types";
import { CellTypes } from "../cell";

export type Direction = "up" | "down";
export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: { cellId: string; direction: Direction };
}

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfterAction {
  type: ActionTypes.INSERT_CELL_AFTER;
  payload: { cellId: string | null; type: CellTypes };
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: { cellId: string; content: string };
}

export interface BundleStartAction {
  type: ActionTypes.BUNDLE_START;
  payload: { cellId: string };
}

export interface BundleCompleteAction {
  type: ActionTypes.BUNDLE_COMPLETE;
  payload: { cellId: string; bundle: { code: string; error: string } };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction;