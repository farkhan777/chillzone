<template>
    <div>
		<div class="content">
			<div class="container-fluid">
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Assign Role 
                        <Select placeholder="Select admin type" style="width: 300px">
                            <Option>Admin</Option>
                            <Option>Editor</Option>
                        </Select>
                    </p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>Resource name</th>
								<th>Read</th>
								<th>Write</th>
								<th>Update</th>
                                <th>Delete</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr>
								<td>Tags</td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
                                <td><Checkbox></Checkbox></td>
							</tr>

                            <tr>
								<td>Category</td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
                                <td><Checkbox></Checkbox></td>
							</tr>

                            <tr>
								<td>Admin users</td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
                                <td><Checkbox></Checkbox></td>
							</tr>

                            <tr>
								<td>Role</td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
                                <td><Checkbox></Checkbox></td>
							</tr>

                            <tr>
								<td>Assign role</td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
                                <td><Checkbox></Checkbox></td>
							</tr>

                            <tr>
								<td>Home</td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
								<td><Checkbox></Checkbox></td>
                                <td><Checkbox></Checkbox></td>
							</tr>
								<!-- ITEMS -->

						</table>
					</div>
				</div>

			</div>
		</div>
    </div>
</template>