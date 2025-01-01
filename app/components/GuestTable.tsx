"use client";
import { Checkbox } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import { GuestData } from "../types";

interface GroupData extends GuestData {
  id: number;
  name: string;
  isGuest: boolean;
  email?: string;
  number?: number;
  guests?: GroupData[];
}

const CollapsibleTable: React.FC<{
  initialData: GroupData[];
  deleteGuests: (guestIds: number[]) => Promise<any>;
  deleteGroup: (groupIds: number[]) => Promise<any>;
}> = ({ initialData, deleteGuests, deleteGroup }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [tableData, setTableData] = useState<GroupData[]>(initialData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);
  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const handleDeleteSelected = async () => {
    if (selectedRows.length) {
      const response = await deleteGuests(selectedRows);
      if (selectedGroups.length) {
        const groupResponse = await deleteGroup(selectedGroups);
        console.log(groupResponse);
      }
      if (response) {
        const filteredData = tableData
          .filter((row) => !isRowSelected(row))
          .map((row) => {
            if (row.guests) {
              row.guests = row.guests.filter(
                (child) => !selectedRows.includes(child.id)
              );
            }
            return row;
          });
        setTableData(filteredData);
        setSelectedRows([]);
      }
    }
  };
  const filterRows = (rows: GroupData[]): GroupData[] => {
    return rows
      .map((row) => {
        if (
          row.name.toLowerCase().includes(searchQuery) ||
          row?.email?.toLowerCase()?.includes(searchQuery) ||
          (row.guests && filterRows(row.guests).length > 0)
        ) {
          if (row.guests) {
            row.guests = filterRows(row?.guests || []);
          }
          return row;
        }
        return null;
      })
      .filter(Boolean) as GroupData[];
  };

  const filteredData = useMemo(
    () => filterRows([...tableData]),
    [searchQuery, tableData]
  );

  const exportToCSV = () => {
    const flattenRows = (rows: GroupData[]) => {
      let flatRows: { id: number; name: string; email?: string }[] = [];
      rows.forEach((row) => {
        if (row.isGuest) {
          flatRows.push({ id: row.id, name: row.name, email: row?.email });
        }
        if (row.guests) {
          flatRows = flatRows.concat(flattenRows(row.guests));
        }
      });
      return flatRows;
    };

    const csvRows = [["ID", "Name", "Email"]];

    flattenRows(filteredData).forEach((row) => {
      csvRows.push([row.id.toString(), row.name, row?.email || ""]);
    });

    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "exported_data.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const getRowIds = (row: GroupData): number[] => {
    let ids = [row.id];
    if (row.guests) {
      row.guests.forEach((child) => {
        ids = ids.concat(getRowIds(child));
      });
    }
    return ids;
  };
  const isRowSelected = (row: GroupData) =>
    row.isGuest
      ? selectedRows.includes(row.id)
      : selectedGroups.includes(row.id);
  const toggleSelectRow = (row: GroupData) => {
    let newSelected = [...selectedRows];
    if (row.isGuest) {
      if (newSelected.includes(row.id)) {
        newSelected = newSelected.filter((ele) => ele !== row.id);
      } else {
        newSelected.push(row.id);
      }
    } else {
      let newGroupSelected = [...selectedGroups];
      const guestIds = row.guests?.map((ele) => ele.id);
      if (selectedGroups.includes(row.id)) {
        newSelected = newSelected.filter((ele) => !guestIds?.includes(ele));
        newGroupSelected = newGroupSelected.filter((ele) => ele !== row.id);
      } else {
        newGroupSelected.push(row.id);
        newSelected = [...newSelected, ...(guestIds || [])];
      }
      setSelectedGroups(newGroupSelected);
    }
    setSelectedRows(newSelected);
  };
  const renderRow = (row: GroupData, isChild = false) => (
    <React.Fragment key={row.id}>
      <tr
        className={`border-t hover:bg-gray-50 ${
          isRowSelected(row) ? "bg-blue-100" : ""
        } ${isChild ? "pl-4" : ""}`}
      >
        <td className="px-4 py-2 w-12">
          <input
            type="checkbox"
            checked={isRowSelected(row)}
            onChange={() => toggleSelectRow(row)}
            className="cursor-pointer"
          />
        </td>
        <td className="px-4 py-2">{row.isGuest ? "" : row.name}</td>
        <td className="px-4 py-2">{row.isGuest ? row.name : ""}</td>
        <td className="px-4 py-2">{row.email}</td>
        <td className="px-4 py-2">{row.isGuest ? "" : row.number}</td>
        <td className="px-4 py-2 text-right">
          {row.guests ? (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => toggleRow(row.id)}
            >
              {expandedRows.includes(row.id) ? "−" : "+"}
            </span>
          ) : null}
        </td>
      </tr>
      {row.guests && expandedRows.includes(row.id) && (
        <tr className="bg-gray-50">
          <td colSpan={3} className="px-6 py-2">
            <table className="w-full">
              <tbody>{row.guests.map((child) => renderRow(child, true))}</tbody>
            </table>
          </td>
        </tr>
      )}
    </React.Fragment>
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between p-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border rounded"
        />
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => handleDeleteSelected()}
        >
          Delete Selected
        </button>
        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Export to CSV
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th>
              <Checkbox />
            </th>
            <th className="px-4 py-2 text-left">Group Name</th>
            <th className="px-4 py-2 text-left">Guest Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Number of Guests</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>{filteredData.map((row) => renderRow(row))}</tbody>
      </table>
    </div>
  );
};

export default CollapsibleTable;
