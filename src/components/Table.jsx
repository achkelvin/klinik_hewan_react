import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import PropTypes from 'prop-types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomTable = ({ columns, data, sortColumn, sortDirection, onSort }) => {
  const handleSort = (columnId) => {
    if (onSort) {
      onSort(columnId);
    }
  };

  return (
    <TableContainer
      className="p-4 d-flex justify-content-center align-items-center"
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                align="center"
                key={column.id}
                width={column.width}
              >
                {column.sortable ? (
                  <TableSortLabel
                    active={sortColumn === column.id}
                    direction={sortDirection}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  column.label
                )}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row[column.id]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // Add more prop types for each property in the data object if necessary
    })
  ).isRequired,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.oneOf(['asc', 'desc']),
  onSort: PropTypes.func,
};

export default CustomTable;
