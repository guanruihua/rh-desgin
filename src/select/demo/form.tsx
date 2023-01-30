import React from "react"
import { Button } from "@/button"
import { Form, useForm } from "@/form"
import { FormRecord } from "@/form/type"
import { Select } from '..'
import { options } from './data'

export default function () {
	const form = useForm()
	// const form2 = useForm()

	return <div>
		<div>
			<h3>结合Form</h3>
			<Form
				// name="7788"
				form={form}
				onSubmit={(values: FormRecord) => {
					console.log(values)
				}}
			>
				<Form.Item name="select-name">
					<Select
						options={options}
					/>
				</Form.Item>
				<Button
					onClick={() => {
						form.setFieldValue('select-name', 'lucy2')
					}}>
						setFieldValue('select-name', 'lucy2')
				</Button>
				<div>
					<Button htmlType="submit">Submit</Button>
					<Button htmlType="reset">Reset</Button>
				</div>
			</Form>
			{/* <Form
				// name="7788"
				form={form2}
				onSubmit={(values: FormRecord) => {
					console.log(values)
				}}
			>
				<Form.Item name="select-name">
					<Select
						options={options}
					/>
				</Form.Item>
				<Button
					onClick={() => {
						form2.setFieldValue('select-name', 'lucy2')
					}}>
						setFieldValue('select-name', 'lucy2')
				</Button>
				<div>
					<Button htmlType="submit">Submit</Button>
					<Button htmlType="reset">Reset</Button>
				</div>
			</Form> */}
		</div>
	</div>
}
