import _ from 'lodash'

export default {
  label: '文件',

  sidebarLabel: '文件管理',

  path: '/backend/files',

  fields: {
    _id: {
      label: 'ID',
      render: ({ value }) => <span title={value}>{_.truncate(value, { length: 9 })}</span>
    },

    originalFilename: {
      label: '原文件名'
    },

    newFilename: {
      label: '文件名',
    },

    mimetype: {
      label: '类型',
    },

    filepath: {
      label: '路径',
      // render: ({ value }) => <span title={value}>{_.truncate(value, { length: 27 })}</span>
    },

    size: {
      label: '大小',
    },

    createdAt: {
      label: '上传时间'
    },

    isDeleted: {
      label: '已删除',
      render: ({ value }) => {
        return value ? (
          <span className='inline-block p-px px-3 border border-red-500 rounded-md text-xs text-red-500 cursor-default'>是</span>
        ) : (
          <span className='inline-block p-px px-3 border border-green-500 rounded-md text-xs text-green-500 cursor-default'>否</span>
        )
      }
    },
  }
}
