// components/table/UserTable.tsx
"use client";

import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import mockUsers from "@/mocks/mock-users.json";
import { exportToCSV } from "@/utils/exportToCSV";
import { Download } from "lucide-react";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  status: "active" | "inactive";
};

export default function UserTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<any>([]);

  const data = useMemo(() => mockUsers, []);

  const columns = useMemo<
    ColumnDef<{
      id: string;
      name: string;
      email: string;
      role: string;
      createdAt: string;
      status: string;
    }>[]
  >(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "role",
        header: "Role",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          const status = getValue() as string;
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                status === "active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status}
            </span>
          );
        },
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ getValue }) => {
          const date = new Date(getValue() as string);
          return date.toLocaleDateString();
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 7,
      },
    },
  });

  return (
    <div className="p-6 bg-white dark:bg-zinc-800 rounded shadow">
    <div className="mb-4 flex justify-between items-center">
      <input
        type="text"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search users..."
        className="border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
      />
    </div>
    <div className="h-96 overflow-y-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-300 dark:border-zinc-700">
          <thead className="bg-gray-100 dark:bg-zinc-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 cursor-pointer text-center font-medium text-gray-700 uppercase tracking-wider border-b dark:text-white dark:border-zinc-600"
                  >
                    <div className="flex items-center justify-center space-x-1">
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                      <span className="inline-block w-4">
                        {header.column.getIsSorted() === "asc" ? (
                          "▲"
                        ) : header.column.getIsSorted() === "desc" ? (
                          "▼"
                        ) : (
                          <span className="text-gray-300 dark:text-gray-500">▼</span>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-zinc-800 dark:divide-zinc-700">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition-colors duration-150 dark:hover:bg-zinc-700"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-3 text-center whitespace-nowrap dark:text-white"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
    {/* Pagination Controls */}
    <div className="flex items-center justify-between mt-4">
      <div className="space-x-2">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:opacity-50 bg-gray-100 dark:text-white hover:bg-gray-200 dark:bg-zinc-700 dark:border-zinc-600 dark:hover:bg-zinc-600"
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:opacity-50 bg-gray-100 dark:text-white hover:bg-gray-200 dark:bg-zinc-700 dark:border-zinc-600 dark:hover:bg-zinc-600"
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:opacity-50 bg-gray-100 dark:text-white hover:bg-gray-200 dark:bg-zinc-700 dark:border-zinc-600 dark:hover:bg-zinc-600"
        >
          {">"}
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:opacity-5 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-zinc-700 dark:border-zinc-600 dark:hover:bg-zinc-600"
        >
          {">>"}
        </button>
      </div>
  
      <span className="text-sm text-gray-700 dark:text-white">
        Page{" "}
        <strong>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </strong>
      </span>
    </div>
  
    <div className="mt-4 flex justify-end">
      <button
        onClick={() => {
          const rows = table.getFilteredRowModel().rows;
          const exportData = rows.map((row) => row.original);
          console.log(rows, "   ", exportData);
          exportToCSV(exportData, "user_data");
        }}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        <Download size={16} />
        Export CSV
      </button>
    </div>
  </div>
  
  );
}
