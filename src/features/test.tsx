import _ from 'lodash'

export default {
  label: '测试',

  sidebarLabel: '测试表单',

  path: '/backend/test',

  fields: {
    _id: {
      label: 'ID',
      hideOnForm: true,
      render: ({ value }) => <span title={value}>{_.truncate(value, { length: 9 })}</span>
    },

    text: {
      label: '单行文本',
      type: 'text',
    },

    number: {
      label: '数字',
      type: 'number',
    },

    password: {
      label: '密码',
      type: 'password',
    },

    textarea: {
      label: '多行文本',
      type: 'textarea',
    },
  }
}
