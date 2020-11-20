export interface AddressBlockProps {
	name: string;
	address_line: string;
	city: string;
	zip_code: string;
	country: string;
	onDelete: () => void;
}
