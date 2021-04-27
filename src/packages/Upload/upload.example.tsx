import React from 'react'
import Card from '../../components/Card/card'
import Code from '../../components/Code/code'
import Button from '../Button'
import Icon from '../Icon'
import Upload from './upload'

const Example = () => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false
    }
    return true
  };
  
  return (
    <div className="cv-example">
      <Card title="上传组件">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          onChange={function noRefCheck() {}}
          onProgress={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSuccess={function noRefCheck() {}}
        >
          <Button btnType="primary" size="lg">
            <Icon icon="upload" /> 点击上传
          </Button>
        </Upload>
        <Code>
          {
`<Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="file"
    onChange={function noRefCheck() {}}
    onProgress={function noRefCheck() {}}
    onRemove={function noRefCheck() {}}
    onSuccess={function noRefCheck() {}}
>
    <Button btnType="primary" size="lg">
    <Icon icon="upload" /> 点击上传
    </Button>
</Upload>`}
        </Code>
      </Card>

      <Card title="自定义上传前检查">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={checkFileSize}
        >
          <Button size="lg" btnType="primary">
            <Icon icon="upload" /> 不能传大于50Kb！{' '}
          </Button>
        </Upload>
        <Code>
          {
`const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false
    }
    return true
};  

<Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    beforeUpload={checkFileSize}
>
    <Button size="lg" btnType="primary">
    <Icon icon="upload" /> 不能传大于50Kb！{' '}
    </Button>
</Upload>`}
        </Code>
      </Card>

      <Card title="拖拽上传">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          drag
          multiple
          onChange={function noRefCheck() {}}
          onProgress={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSuccess={function noRefCheck() {}}
        >
          <Icon icon="upload" size="5x" theme="secondary" />
          <br />
          <p>点击或者拖动到此区域进行上传</p>
        </Upload>
        <Code>
          {
`<Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="file"
    drag
    multiple
    onChange={function noRefCheck() {}}
    onProgress={function noRefCheck() {}}
    onRemove={function noRefCheck() {}}
    onSuccess={function noRefCheck() {}}
>
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>点击或者拖动到此区域进行上传</p>
</Upload>`}
        </Code>
      </Card>
    </div>
  )
}

Example.defaultProps = [
  {
    属性: 'action',
    类型: 'string',
    required: 'true',
    默认值: '-',
    描述: '上传地址',
  },
  {
    属性: 'defaultFileList',
    类型: 'UploadFile[]',
    required: '-',
    默认值: '-',
    描述: '上传文件数组',
  },
  {
    属性: 'beforeUpload',
    类型: '(file: File) => boolean | Promise<File>',
    required: '-',
    默认值: '-',
    描述: '上传前触发方法',
  },
  {
    属性: 'onProgress',
    类型: '(precentage: number, file: File) => void',
    required: '-',
    默认值: '-',
    描述: '上传进度触发方法',
  },
  {
    属性: 'onSuccess',
    类型: '(data: any, file: File) => void',
    required: '-',
    默认值: '-',
    描述: '上传成功触发方法',
  },
  {
    属性: 'onError',
    类型: '(err: any, file: File) => void',
    required: '-',
    默认值: '-',
    描述: '上传失败触发方法',
  },
  {
    属性: 'onChange',
    类型: ' (file: File) => void',
    required: '-',
    默认值: '-',
    描述: '文件变化触发方法',
  },
  {
    属性: 'onRemove',
    类型: '(file: UploadFile) => void',
    required: '',
    默认值: '-',
    描述: '删除文件触发方法',
  },
  {
    属性: 'headers',
    类型: 'Record<string, any>',
    required: '-',
    默认值: '-',
    描述: '发送请求头',
  },
  {
    属性: 'name',
    类型: ' string',
    required: '-',
    默认值: '-',
    描述: '文件字段名',
  },
  {
    属性: 'data',
    类型: 'Record<string, any>',
    required: '-',
    默认值: '-',
    描述: '发送数据',
  },
  {
    属性: 'withCredentials',
    类型: 'boolean',
    required: '-',
    默认值: 'false',
    描述: '是否允许携带cookie',
  },
  {
    属性: 'accept',
    类型: 'string',
    required: '-',
    默认值: '-',
    描述: 'file 标签属性，规定可上传类型',
  },
  {
    属性: 'multiple',
    类型: 'boolean',
    required: '-',
    默认值: '-',
    描述: '是否允许多选',
  },
  {
    属性: 'drag',
    类型: 'boolean',
    required: '-',
    默认值: '-',
    描述: '是否允许拖动上传',
  },
]

export default Example
