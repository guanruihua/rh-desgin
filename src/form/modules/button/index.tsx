import React, { ButtonHTMLAttributes } from "react"
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'
import { isUndefined } from "asura-eye"


export interface ButtonProps extends ComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'| 'className'> {
	htmlType?: 'submit' | 'reset' | 'button'
	/**
	 * @description 按钮类型
	 * @default: 'default'
	 */
	type?: 'primary' | 'text' | 'default'
	danger?: boolean
}

export function Button(props: ButtonProps) {

	const { htmlType = 'button', children = '', className, type, ...rest } = props

	const getType = (): ButtonProps['type'] => {

		if (htmlType === 'submit' && isUndefined(type)) return 'primary'
		if (isUndefined(type)) return 'default'

		return type
	}

	const newClassName = classNames(
		`au-btn`,
		`au-btn-${getType()}`,
		className
	)

	return <button
		type={htmlType}
		className={newClassName}
		{...rest as ButtonHTMLAttributes<unknown>}
	>
		{children}
	</button>
}