// Material TABLE
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// MUI ICONS
import ArrowDown from "@mui/icons-material/ArrowDropDown";
import ArrowUp from "@mui/icons-material/ArrowDropUp";

import { useState } from "react";

const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (e) => {
    onPageChange(e, 0);
  };

  const handleBackButtonClick = (e) => {
    onPageChange(e, page - 1);
  };

  const handleNextButtonClick = (e) => {
    onPageChange(e, page + 1);
  };

  const handleLastPageButtonClick = (e) => {
    onPageChange(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

const BasicTable = ({ data, loading }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {loading ? (
        <div className="text-center m-4">loading data ...</div>
      ) : (
        <div className="w-[1600px] mx-auto my-8">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold" align="center">
                    #
                  </TableCell>
                  <TableCell className="font-bold">Name</TableCell>
                  <TableCell className="font-bold">Price</TableCell>
                  <TableCell className="font-bold" align="right">
                    1h %
                  </TableCell>
                  <TableCell className="font-bold" align="right">
                    24h %
                  </TableCell>
                  <TableCell className="font-bold" align="right">
                    7d %
                  </TableCell>
                  <TableCell className="font-bold" align="right">
                    Market Cap
                  </TableCell>
                  <TableCell className="font-bold" align="right">
                    Volume (24h)
                  </TableCell>
                  <TableCell className="font-bold" align="right">
                    Circulating Supply
                  </TableCell>
                  <TableCell className="font-bold" align="right">
                    Last 7 Days
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((data, index) => {
                    const {
                      cmc_rank,
                      id,
                      name,
                      symbol,
                      circulating_supply,
                      quote: {
                        USD: {
                          price,
                          percent_change_1h,
                          percent_change_24h,
                          percent_change_7d,
                          market_cap,
                          volume_24h,
                        },
                      },
                    } = data;
                    return (
                      <TableRow key={id}>
                        <TableCell>{cmc_rank}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="mr-2 border-none rounded-xl">
                              <img
                                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                                alt={`${name} Logo`}
                                width="30px"
                              />
                            </div>

                            <div className="mr-2 font-bold">{name}</div>
                            <div className="text-gray-400">{symbol}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-bold">
                          $
                          {price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </TableCell>
                        <TableCell align="right">
                          {percent_change_1h.toFixed(2) > 0 ? (
                            <>
                              <ArrowUp className="fill-green-400" />{" "}
                              {percent_change_1h.toFixed(2)}%
                            </>
                          ) : (
                            <>
                              <ArrowDown className="fill-red-400" />{" "}
                              {percent_change_1h.toFixed(2)}%
                            </>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {percent_change_24h.toFixed(2) > 0 ? (
                            <>
                              <ArrowUp className="fill-green-400" />{" "}
                              {percent_change_24h.toFixed(2)}%
                            </>
                          ) : (
                            <>
                              <ArrowDown className="fill-red-400" />{" "}
                              {percent_change_24h.toFixed(2)}%
                            </>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {percent_change_7d.toFixed(2) > 0 ? (
                            <>
                              <ArrowUp className="fill-green-400" />{" "}
                              {percent_change_7d.toFixed(2)}%
                            </>
                          ) : (
                            <>
                              <ArrowDown className="fill-red-400" />{" "}
                              {percent_change_7d.toFixed(2)}%
                            </>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          $
                          {market_cap.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>
                        <TableCell align="right">
                          $
                          {volume_24h.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>
                        <TableCell align="right">
                          {circulating_supply.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}{" "}
                          {symbol}
                        </TableCell>
                        <TableCell align="right">
                          <div className="flex justify-end">
                            <img
                              src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`}
                              alt={`${name}'s 7 day chart`}
                              className={
                                percent_change_7d.toFixed(2) > 0
                                  ? "hue-rotate-[85deg] saturate-[80%] brightness-80"
                                  : "hue-rotate-[300deg] saturate-200 brightness-75"
                              }
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[]}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    count={data.length}
                    onPageChange={handleChangePage}
                    ActionsComponent={TablePaginationActions}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default BasicTable;
