import React from 'react';

import {Dialog, DialogActions, DialogContent, DialogTitle, Button} from '@material-ui/core';



const promocionDialog = (props) => {
    return (
        <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>Customer</DialogTitle>
                <DialogContent>
                      <h1>{props.Titulo}</h1>
                      <h1>{props.Descripcion}</h1>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Close
                    </Button>
                </DialogActions>
            
        </Dialog>
    );
}

export default promocionDialog

