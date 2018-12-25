import * as React from 'react'
import { Tree, Modal, Input, Button } from 'antd'
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
  const ModalOkEvent = () => {
    console.log(selectedKey)
  }
  const onInputChange = (e: any) => setInputValue(e.target.value)
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
        <Input value={inputValue} onChange={onInputChange} />
      </Modal>
    </div>
    
  )
}

export default TagManage

