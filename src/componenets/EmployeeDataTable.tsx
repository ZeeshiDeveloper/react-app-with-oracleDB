import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const EmployeeDataTable = () => {
	const [employee, setEmployee] = useState({
		metaData: [],
		rows: [],
	});
	// fetch data from back-end API (without using axios)
	useEffect(() => {
		fetch("http://localhost:5000/employee")
			.then((response) => response.json())
			.then((res) => setEmployee(res))
			.catch((err) => {
				return err;
			});
	});
	return (
		<div className="mx-6 mb-8">
			<h1 className="text-center text-green-700 border-bottom-2 w-3 mb-8 flex justify-content-center mx-auto">
				Employee Data Table
			</h1>
			<div className="p-3 bg-gray-100">
				<DataTable value={employee.rows} responsiveLayout="scroll">
					{employee.metaData.map((emp_col: any, index: any) => {
						return (
							<Column key={index} field={emp_col.name} header={emp_col.name} />
						);
					})}
				</DataTable>
			</div>
		</div>
	);
};

export default EmployeeDataTable;
