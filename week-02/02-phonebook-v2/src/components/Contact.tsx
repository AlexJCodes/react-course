import type { Contact as ContactType } from "../types";

type ContactProps = {
	contact: ContactType;
	onDelete: (id: number) => void;
	onToggleFavorite: (id: number) => void;
};

const Contact = ({ contact, onDelete, onToggleFavorite }: ContactProps) => {
	const classes = [
		contact.type === "business" ? "business" : "",
		contact.isFavorite ? "favorite" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<li className={classes}>
			<span className="contact-name">{contact.name}</span>
			<span className="contact-phone">{contact.phone}</span>
			<input
				type="checkbox"
				checked={contact.isFavorite}
				onChange={() => onToggleFavorite(contact.id)}
				aria-label={`Favorite ${contact.name}`}
			/>
			<button type="button" onClick={() => onDelete(contact.id)}>
				Delete
			</button>
		</li>
	);
};

export default Contact;
