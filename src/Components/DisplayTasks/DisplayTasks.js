import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';

export default function DisplayTasks(props) {
    const tasks = props.tasks || [];
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Update</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.name}>
                                <TableCell component="th" scope="row">
                                    {task.name}
                                </TableCell>
                                <TableCell align="right">{task.description}</TableCell>
                                <TableCell align="right">
                                    <Fab color="secondary" aria-label="edit" size="medium" onClick={() => { props.handleUpdateTasks(task) }}>
                                        <EditIcon />
                                    </Fab>
                                </TableCell>
                                <TableCell align="right">
                                    <Fab color="secondary" aria-label="edit"
                                        size="medium" style={{ color: "red", backgroundColor: "white" }}
                                        onClick={() => { props.deleteTasksRequest(task.id) }}
                                    >
                                        <DeleteIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
