import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	const options = store.people
		.map(item => ({ name: item.name }))
		.concat(store.planets.map(item => ({ name: item.name })));
	return (
		<div style={{ width: 220 }}>
			<ReactSearchAutocomplete
				items={options}
				onSearch={actions.handleOnSearch}
				onSelect={actions.handleOnSelect}
				onFocus={actions.handleOnFocus}
				placeholder={"SEARH DATABANK"}
				styling={{
					height: "39px",
					zIndex: 2,
					backgroundColor: "#343a40",
					border: "none",
					borderRadius: "4px",
					color: "white",
					hoverBackgroundColor: "#22262a"
				}}
			/>
		</div>
	);
};
