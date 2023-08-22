import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CircularProgress } from "@mui/material";

interface Prop {
  open: boolean;
  handleClose: () => void;
  handleClick: () => void;
  status?: TStatus;
  type: string;
}
const DialogC = ({ open, handleClose, handleClick, type, status }: Prop) => {
  return (
    <div>
      <Dialog
        open={open}
        //onClose={handleClose}
        //aria-labelledby="alert-dialog-title"
        //aria-describedby="alert-dialog-description"
      >
        {status !== "success" && status !== "loading" && status !== "error" && (
          <>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {`Esta seguro que quiere ${type} este producto?`}
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => handleClose()}>No aceptar</Button>

              <Button onClick={handleClick} autoFocus>
                Aceptar
              </Button>
            </DialogActions>
          </>
        )}

        {status === "loading" && <CircularProgress />}

        {status === "success" && (
          <>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {type === "eliminar" && "El pruducto a sido eliminado"}
                {type === "actualizar" && "El pruducto a sido actualizado"}
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => handleClose()}>Ok</Button>
            </DialogActions>
          </>
        )}

        {status === "error" && (
          <>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {`Error al ${type} el producto`}
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => handleClose()}>Ok</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default DialogC;
