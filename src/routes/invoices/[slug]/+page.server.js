/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	return {
		invoice_id: 1001,
		client: {
			name: 'Test Client',
			address: {
				street: '123 Fake Street',
				city: 'Fake City',
				state: 'NY',
				zip: '12345'
			},
			company: 'Test Company',
			slug: 'tstcpy',
			phone: '123-456-7890',
			email: 'email@email.com'
		},
		line_items: [
			{
				description: 'This is a line item',
				hours: 2,
				quantity: null,
				price: '$200.00',
				total: '$400.00'
			}
		],
		total: '$200.00',
		created_at: '1/1/2020',
		sent_at: '1/1/2020',
		due_at: '1/2/2020',
		paid_at: null
	};
}
