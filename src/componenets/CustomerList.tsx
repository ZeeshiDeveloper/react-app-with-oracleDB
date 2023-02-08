import React, { useEffect, useState } from "react";
import Axios from "axios";
import CustomerDataTable from "./CustomerDataTable";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CustomerList = () => {
	const [customer, setCustomer] = useState({
		metaData:[],
		rows:[]
	});
	// fetch data from back-end API
	const getcustomer = async () => {
		try {
			const response = await Axios.get("http://localhost:5000/customer");
			setCustomer(response.data);
			console.log("Response == ", response);
		} catch (err) {
			return err;
		}
	};
	useEffect(() => {
		getcustomer();
	}, []);

	console.log("data : ",customer)
	return (
			<div className="mx-6 mb-8">
				<h1 className="text-center text-green-700 border-bottom-2 w-3 mb-8 flex justify-content-center mx-auto">
					Customer Simple Data Table
				</h1>
				<div className="p-3 bg-gray-100">
					{/* Simple Table Without Using Map Fuynction */}
					{/* <DataTable value={customer.rows} responsiveLayout="scroll">
						<Column field="FIRST_NAME" header="First Name"></Column>
						<Column field="LAST_NAME" header="Last Name"></Column>
						<Column field="GENDER" header="Gender"></Column>
						<Column field="PROFESSION" header="Profession"></Column>
					</DataTable> */}
			<CustomerDataTable {...customer} />
				</div>
			</div>
	);
};

export default CustomerList;
