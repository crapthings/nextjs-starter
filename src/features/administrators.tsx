import _ from 'lodash'

export default {
  label: '后台账号',

  sidebarLabel: '后台账号',

  path: '/backend/administrators',

  fields: {
    _id: {
      label: 'ID',
      hideOnForm: true,
      render: ({ value }) => <span title={value}>{_.truncate(value, { length: 9 })}</span>
    },

    username: {
      label: '用户名'
    },

    password: {
      label: '密码',
      render: ({ value }) => <span title={value}>{_.truncate(value, { length: 32 })}</span>
    },

    note: {
      label: '备注',
      type: 'textarea',
    },

    createdAt: {
      label: '创建时间',
      hideOnForm: true,
    },

    isDisabled: {
      label: '已禁用',
      hideOnForm: true,
      render: ({ value }) => {
        return value ? (
          <span className='inline-block p-px px-3 border border-red-500 rounded-md text-xs text-red-500 cursor-default'>是</span>
        ) : (
          <span className='inline-block p-px px-3 border border-green-500 rounded-md text-xs text-green-500 cursor-default'>否</span>
        )
      }
    },

    isDeleted: {
      label: '已删除',
      hideOnForm: true,
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
