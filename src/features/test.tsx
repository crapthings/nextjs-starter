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

    file: {
      label: '单附件',
      type: 'file',
    },

    files: {
      label: '多附件',
      type: 'files',
    },

    text: {
      label: '单行',
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
      label: '多行',
      type: 'textarea',
    },

    radio: {
      label: '单选',
      type: 'radio',
      defaultValue: '1',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },

    checkbox: {
      label: '多选',
      type: 'checkbox',
      defaultValue: ['1', '2'],
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },

    range: {
      label: '滑条',
      type: 'range',
      valueAsNumber: true,
    },
  }
}
