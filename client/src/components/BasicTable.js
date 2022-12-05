// Material TABLE
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// MUI ICONS
import ArrowDown from "@mui/icons-material/ArrowDropDown";
import ArrowUp from "@mui/icons-material/ArrowDropUp";

const BasicTable = ({ data, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="text-center m-8">loading data ...</div>
      ) : (
        <div className="w-[1600px] mx-auto my-10">
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
                {data.map((data, index) => {
                  const {
                    cmc_rank,
                    id,
                    name,
                    symbol,
                    circulating_supply,
                    total_supply,
                    max_supply,
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
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default BasicTable;
