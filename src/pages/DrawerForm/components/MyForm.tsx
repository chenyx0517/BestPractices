import { MyFormInstance } from '@/types/form'
import { Form, Input } from 'antd'
import { forwardRef, useImperativeHandle } from 'react'

const MyForm = forwardRef<MyFormInstance>((props, ref) => {
  const [form] = Form.useForm()

  useImperativeHandle(ref, () => ({
    getFormValues: () => {
      return form.validateFields()
    }
  }))

  return (
    <Form form={form}>
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
})

export default MyForm
