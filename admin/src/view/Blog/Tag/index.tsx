import * as React from 'react'
import { Tree, Modal, Input, Button, message } from 'antd'
import http from '@tools/http'
import { ITag } from './index.interface'

const { TreeNode } = Tree
const { useEffect, useState } = React
function TagManage() {
  const [tagNodes, setTagNodes] = useState<ITag[]>([])
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedKey, setSelectedKey] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')
  const getTags = async () => {
    const tags: ITag[] = await http.get('/articles/tags')
    setTagNodes(tags)
  }
  useEffect(() => {
    getTags()
  }, [])
  const treeNodeSelect = (selectedKeys: string[]) => {
    showModal()
    setSelectedKey(Number(selectedKeys[0]))
  }
  const showModal = () => {
    setModalVisible(true)    
  }
  const ModalCancelEvent = () => {
    setModalVisible(false)
    setInputValue('')
    setSelectedKey(0)
  }
  const ModalOkEvent = async () => {
    if (selectedKey) {
      const res = await http.patch('/articles/tag', {
        code: selectedKey,
        name: inputValue,
      })
      message.success(res)
      getTags()
    } else {
      const res = await http.post('/articles/tag', {
        name: inputValue,
      })
      message.success(res)
      getTags()
    }
    ModalCancelEvent()
  }
  const onInputChange = (e: any) => setInputValue(e.target.value)
  const deleteTagEvent = async () => {
    const res = await http.delete(`/articles/tag/${selectedKey}`)
    message.success(res)
    ModalCancelEvent()
    getTags()
  }
  return (
    <div>
      <Button onClick={showModal}>添加标签</Button>
      <Tree
        onSelect={treeNodeSelect}
      >
        {
          tagNodes && tagNodes.map(tag => <TreeNode 
            title={tag.name} 
            key={String(tag.code)} 
          />)
        }
      </Tree>
      <Modal 
        visible={modalVisible}
        onOk={ModalOkEvent}
        onCancel={ModalCancelEvent}
      >
        <Input 
          style={{width: '60%'}}
          value={inputValue} 
          onChange={onInputChange} 
        />
        <Button type="danger" style={{marginLeft: '30px'}} onClick={deleteTagEvent}>删除标签</Button>
      </Modal>
    </div>
    
  )
}

export default TagManage

