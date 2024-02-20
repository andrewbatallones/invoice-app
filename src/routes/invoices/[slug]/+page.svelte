<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="m-8">
	<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
		<h1>Invoice</h1>
		<hr />
		<div class="items-center flex justify-between">
			<div class="text-left rtl:text-left">
				<div>Date: {data.date_created}</div>
				<div>Invoice #: {data.invoice_id}</div>
				<div>Customer ID: {data.client.slug}</div>
			</div>
			<div class="text-left rtl:text-right">
				<div>
					{data.client.name}<br />
					{data.client.company}<br />
					{data.client.address.street}<br />
					{data.client.address.city}, {data.client.address.state} {data.client.address.zip}<br />
					{data.client.phone}<br />
					{data.client.email}
				</div>
			</div>
		</div>
		
		<div class="mt-5 relative overflow-x-auto">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">
							Hours
						</th>
						<th scope="col" class="px-6 py-3">
							Quantity
						</th>
						<th scope="col" class="px-6 py-3">
							Description
						</th>
						<th scope="col" class="px-6 py-3">
							Unit Price
						</th>
						<th scope="col" class="px-6 py-3">
							Total Price
						</th>
					</tr>
				</thead>
				<tbody>
					{#each data.line_items as item}
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-6 py-4">
								{item.hours || ''}
							</td>
							<td class="px-6 py-4">
								{item.quantity || ''}
							</td>
							<td class="px-6 py-4 col-span-2">
								{item.description}
							</td>
							<td class="px-6 py-4">
								{item.price}
							</td>
							<td class="px-6 py-4">
								{item.total}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
