import React from 'react'
import '../Components/styling.css'
import {ideas, columns} from '../assets/ideas.jsx'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


export default function Problem() {
  return (
    <div className='problem-container container'>
      {/* <table>
        <tr>
            <th>S. no.</th>
            <th>Organization</th>
            <th>Problem Statement Title </th>
            <th>Category</th>
            <th>PS Number</th>
            <th>Submiitted Idea(s) count</th>
            <th>Theme</th>
        </tr>
        {ideas.map((idea, key) => (
            <tr>
                <td>{key+1}</td>
                <td>{idea.Organisation}</td>
                <td>{idea.Title}</td>
                <td>{idea.Category}</td>
                <td>{idea.Statement_id}</td>
                <td>{idea.Datasetfile}</td>
                <td>{idea.Technology_Bucket}</td>
            </tr>
        ))}
      </table> */}

<Box sx={{ height: "auto", width: '100%' }}>
      <DataGrid
        rows={ideas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15, 20, 25, { value: -1, label: 'All' }]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}
