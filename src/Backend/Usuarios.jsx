import React, { useEffect, useState } from 'react';
import Panel from './Panel';
import {Table, TableBody, TableCell, TableRow, TableHead,TableContainer, Paper, makeStyles, Container,Typography, Button, Grid, IconButton} from '@material-ui/core';
 import {ToastContainer, toast} from 'react-toastify';
 import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {getCustomers} from './usuarioData';
const Usuarios =  ({ setNavbar }) => {

    useEffect(() => {
        setNavbar(true);
      }, [setNavbar]);
      const classes  = useStyles();
     const [customers, setCustomers] = useState([]);
     const [loading, setLoading] = useState(false);
     const override =`
     display: flex;
     align-items: center;
     justify-content: center;    
     border-color: red;
 `   ;
      const getlist = async () => { 
        try {
            setLoading(true);
            const list = await getCustomers();
            setCustomers(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
      }
     const handleAdd = () => {
          
      }
      const getOneCustomer = async (id) => {
       

        }
        const deleteHandler = async (id) => {
            
        }
      useEffect(() => {
        getlist();
    }, []);
      return (
        <div className="d-flex align-items-baseline" >
            <div className="row  row-cols-2 w-100 justify-content-start">
                <div className="col-2 vh-100">
                        <Panel></Panel>
                </div>
                <div className="col-10 vh-100">
                    <h1 className=" mt-5">Usuarios</h1>
                    <Container className={classes.container}>
                      <ToastContainer/>
                        <TableContainer component={Paper}>
                          <Grid container>
                            <Grid item xs={8}>
                                <Typography className={classes.title} variant="h6" component="div">
                                    Todos los Usuarios
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAdd}
                                    className={classes.button}
                                    startIcon={<AddCircle/>}
                                >Add</Button>
                            </Grid>
                         </Grid>
                         <Table className={classes.table}>
                              <TableHead>
                                  <TableRow>
                                      <TableCell className={classes.head}>Usuario</TableCell>
                                      <TableCell className={classes.head}>email</TableCell>
                                      <TableCell className={classes.head}>Teléfono</TableCell>
                                      <TableCell className={classes.head}>cédula</TableCell>
                                      <TableCell className={classes.head}>dirección</TableCell>
                                      <TableCell className={classes.head}>Foto</TableCell>
                                      <TableCell className={classes.head}>Acciones</TableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                {customers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <ScaleLoader 
                                        css={override}
                                        size={150}
                                        color={"#38589b"}
                                        loading={loading}/>
                                    </TableCell>
                                </TableRow>
                                ) :(
                                <>
                                {customers.map((cust) => (
                                    <TableRow key={cust.id}>
                                      <TableCell>{cust.name}</TableCell>
                                      <TableCell>{cust.email}</TableCell>
                                      <TableCell>{cust.cellphone}</TableCell>
                                      <TableCell>{cust.ci}</TableCell>
                                      <TableCell>{cust.direction}</TableCell>
                                      <TableCell>{cust.photoURL}</TableCell>
                                      
                                      <TableCell>
                                        <IconButton onClick={() => getOneCustomer(cust.id)} color="primary" aria-label="update customer">
                                                <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => deleteHandler(cust.id)} color="secondary" aria-label="delete customer">
                                            <Delete />
                                        </IconButton>
                                      </TableCell>
                                  </TableRow>
                                ))}
                                  
                                </>
                            )}

                              </TableBody>
                            </Table>  
                        </TableContainer >
                    </Container >

                </div>
                </div>
        </div>
        
    )
}

const useStyles = makeStyles((theme) => ({
  table: {
      minWidth: 800,
  },
  container: {
      marginTop: '40px'
  }, 
  title: {
      flex: '1 1 100%',
      padding: '20px'
  },
  head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
  },
  button: {
      margin: theme.spacing(1),
      float: 'right',
  },
}));

export default Usuarios
