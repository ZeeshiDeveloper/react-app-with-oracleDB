import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export interface IDataTable {
	metaData: { name: string }[];
	rows: {
		CUSTOMER_ID: number;
		FIRST_NAME: string;
		LAST_NAME: string;
		GENDER: string;
		PROFESSION: string;
	}[];
}
const CustomerDataTable = (props: IDataTable) => {
	return (
		<div>
			<DataTable value={props.rows} responsiveLayout="scroll">
				{props.metaData.map((x: any, index: any) => {
					return <Column key={index} field={x.name} header={x.name} />;
				})}
			</DataTable>
		</div>
	);
};

export default CustomerDataTable;
