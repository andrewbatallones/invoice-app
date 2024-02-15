/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		invoices: [
			{
				invoice_id: 1001,
				company: 'Company',
				total: '$200.00',
				date_sent: '1/1/2020',
				date_due: '1/2/2020',
				date_paid: null
			}
		]
	};
}
