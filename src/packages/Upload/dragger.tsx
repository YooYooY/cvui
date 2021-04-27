import classNames from 'classnames'
import React, { FC, useState, DragEvent } from 'react'

interface DraggerProps {
  onFile: (files: FileList) => void
}

const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState(false)
  const classes = classNames('cv-uploader-dragger', {
    'is-dragover': dragOver,
  })
  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer!.files)
  }
  const handleDrag = (e: DragEvent, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  return (
    <div
      className={classes}
      onDragOver={(e) => {
        handleDrag(e, true)
      }}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}
    >
        {children}
    </div>
  )
}

export default Dragger
