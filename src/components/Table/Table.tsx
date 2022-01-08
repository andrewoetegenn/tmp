import "./Table.css";

export type Column = {
  key: string;
  header: string;
  showHeader?: boolean;
  type?: "string" | "currency";
  align?: "left" | "right" | "center";
  selector?: (row: any) => void;
};

const Table = ({ columns, rows }: { columns: Column[]; rows: any[] }) => {
  const formatCurrency = (value: any): string => {
    if (isNaN(value.toString())) return "";

    return value.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, columnIndex) => (
            <th key={columnIndex} align={column.align || "left"}>
              {column.showHeader === undefined || column.showHeader
                ? column.header
                : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td
                key={`${rowIndex}-${columnIndex}`}
                align={column.align || "left"}
              >
                {column.type === "currency"
                  ? formatCurrency(row[column.key])
                  : column.selector
                  ? column.selector(row)
                  : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
