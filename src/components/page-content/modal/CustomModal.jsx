import React from "react";
import { Link, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { CustomModalStyle } from "./CustomModalStyle";

function CustomModal({buttonName, children, buttonStyle }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Link
        sx={buttonStyle}
        component="button"
        color="inherit"
        onClick={handleOpen}
      >
        {buttonName}
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={CustomModalStyle.chartWrapper}>{children}</Box>
      </Modal>
    </>
  );
}

export default CustomModal;
