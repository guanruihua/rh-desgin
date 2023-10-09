import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Input, InputChangeEvent } from '@/form'
import { Table } from "@/dataGraph"

export default function InputTestCmp() {

	const [value, setValue] = React.useState<string>('value')

	return <Container columns={1} title="Input">
		<Unit title="Input">
			<Table
				noBorder
				dataSource={[
					{ component: <Input />, prop: 'Empty', desc: '默认', },
					{ component: <Input defaultValue={'defaultValue'} />, prop: 'defaultValue ', desc: '设置默认值', },
					{ component: <Input value={'value'} />, prop: 'value', desc: '设置值, 没有设置onChange修改该值, 无法修改值', },
					{
						component: <Input
							value={value}
							onChange={(e: InputChangeEvent) => {
								setValue(e.target.value)
							}} />,
						prop: 'value, onChange',
						desc: '设置值, 通过onChange回调设置该值',
					},

				]}
				columns={[
					{ title: 'Component', dataIndex: 'component' },
					{ title: 'Props', dataIndex: 'prop' },
					{ title: 'Description', dataIndex: 'desc' },
				]}
			/>
		</Unit>
	</Container>
}