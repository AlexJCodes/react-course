import { useState } from "react";
import type { Contact as ContactType, Filter } from "../types";
import Contact from "./Contact";

const initialContacts: ContactType[] = [
	{
		id: 1,
		name: "John Doe",
		phone: "123-456-7890",
		type: "personal",
		isFavorite: false,
	},
	{
		id: 2,
		name: "Jane Smith",
		phone: "234-567-8901",
		type: "business",
		isFavorite: false,
	},
	{
		id: 3,
		name: "Bob Johnson",
		phone: "345-678-9012",
		type: "personal",
		isFavorite: true,
	},
	{
		id: 4,
		name: "Alice Brown",
		phone: "456-789-0123",
		type: "business",
		isFavorite: false,
	},
	{
		id: 5,
		name: "Charlie Wilson",
		phone: "567-890-1234",
		type: "personal",
		isFavorite: false,
	},
];

const PhoneBook = () => {
	const [contacts, setContacts] = useState<ContactType[]>(initialContacts);
	const [selectedFilter, setSelectedFilter] = useState<Filter>("All");

	const deleteContact = (id: number) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	const toggleFavorite = (id: number) => {
		setContacts(
			contacts.map((contact) =>
			contact.id === id
				? {
					...contact,
					isFavorite: !contact.isFavorite,
				}
				: contact,
			),
		)
	}

	const filteredContacts = contacts.filter((contact) => {
		if (selectedFilter === "All") {
			return true;
		}

		if (selectedFilter === "Personal") {
			return contact.type === "personal";
		}

		if (selectedFilter === "Business") {
			return contact.type === "business";
		}

		if (selectedFilter === "Favorites") {
			return contact.isFavorite;
		}

		return true;
	});

	return (
		<section>
			<div>
				<button
					type="button"
					onClick={() => setSelectedFilter("All")}
					aria-pressed={selectedFilter === "All"}
				>
					All
				</button>

				<button
					type="button"
					onClick={() => setSelectedFilter("Personal")}
					aria-pressed={selectedFilter === "Personal"}
				>
					Personal
				</button>

				<button
					type="button"
					onClick={() => setSelectedFilter("Business")}
					aria-pressed={selectedFilter === "Business"}
				>
					Business
				</button>

				<button
					type="button"
					onClick={() => setSelectedFilter("Favorites")}
					aria-pressed={selectedFilter === "Favorites"}
				>
					Favorites
				</button>
			</div>

			<p>
				Showing {filteredContacts.length} of {contacts.length} contacts
			</p>

			<ul>
				{filteredContacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
						onDelete={deleteContact}
						onToggleFavorite={toggleFavorite}
					/>
				))}
			</ul>
		</section>
	);
};

export default PhoneBook;
