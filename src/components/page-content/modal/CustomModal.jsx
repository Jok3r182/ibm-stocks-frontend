import React from "react";
import { Link, Modal } from "@mui/material";
import { Box } from "@mui/system";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  backgroundColor: 'white',
  boxShadow: 24,
  p: 4,
};

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
        <Box style={style}>{children}</Box>
      </Modal>
    </>
  );
}

export default CustomModal;
