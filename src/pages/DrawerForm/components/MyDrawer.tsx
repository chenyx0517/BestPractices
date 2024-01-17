import { useSubmitWithLock } from '@/hooks/useSubmitWithLock'
import { MyFormInstance } from '@/types/form'
import { mockApiRequest } from '@/utils/common'
import { Button, Drawer, Space, message } from 'antd'
import { useRef, useState } from 'react'
import styles from '../styles.less'
import MyForm from './MyForm'
interface MyDrawerProps {
  open: boolean
  onClose: () => void
}

const MyDrawer: React.FC<MyDrawerProps> = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<MyFormInstance>(null)
  const submitWithLock = useSubmitWithLock()

  const onConfirm = async () => {
    const values = await formRef.current?.getFormValues()
    setLoading(true)
    try {
      const res = await submitWithLock(() => mockApiRequest(values))
      message.success(res)
      // 关闭弹窗
      onClose()
    } catch (err: any) {
      message.error(err)
    } finally {
      setLoading(false)
    }
  }

  const Footer = (
    <Space>
      <Button onClick={onConfirm} htmlType="submit" loading={loading}>
        确认
      </Button>
      <Button onClick={onClose}>取消</Button>
    </Space>
  )

  return (
    <Drawer
      title="form"
      className={styles['my-drawer']}
      open={open}
      onClose={onClose}
      footer={Footer}
      width="700"
      destroyOnClose
    >
      <MyForm ref={formRef} />
    </Drawer>
  )
}

export default MyDrawer
