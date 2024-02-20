/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		invoices: [
			{
				invoice_id: 1001,
				company: 'Company',
				total: '$200.00',
				sent_at: '1/1/2020',
				due_at: '1/2/2020',
				paid_at: null
			}
		]
	};
}
