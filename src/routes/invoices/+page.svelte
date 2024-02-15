<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Invoice #
                </th>
                <th scope="col" class="px-6 py-3">
                    Company
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount Invoiced
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Sent
                </th>
                <th scope="col" class="px-6 py-3">
                    Due Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Paid Date
                </th>
                <th scope="col" class="px-6 py-3">
					Actions
                </th>
            </tr>
        </thead>
        <tbody>
			{#each data.invoices as invoice}
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th class="px-6 py-4">
						{invoice.invoice_id}
					</th>
					<td class="px-6 py-4">
						{invoice.company}
					</td>
					<td class="px-6 py-4">
						{invoice.total || '$0.00'}
					</td>
					<td class="px-6 py-4">
						{invoice.date_sent || ''}
					</td>
					<td class="px-6 py-4">
						{invoice.date_due || ''}
					</td>
					<td class="px-6 py-4">
						{invoice.date_paid || ''}
					</td>
					<td class="px-6 py-4">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white inline-block"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								stroke-linejoin="round"
								stroke-width="2" d="M16.4 18H19c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h2.6m9.4-7V5c0-.6-.4-1-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4c0 .6-.4 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
						</svg>
						<a href="/invoices/{invoice.invoice_id}">
							<svg
								class="w-6 h-6 text-gray-800 dark:text-white inline-block"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24">
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
							</svg>
						</a>
					</td>
				</tr>
			{/each}
        </tbody>
    </table>
</div>

